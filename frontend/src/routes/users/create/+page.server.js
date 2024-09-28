import { error, fail } from '@sveltejs/kit';
import { PUBLIC_GRAPHQL_URL } from '$env/static/public';

export const actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    const query = `
      mutation CreateUser($name: String!, $email: String!) {
        createUser(name: $name, email: $email) {
          id
          name
          email
        }
      }
    `;

    try {
      const response = await fetch(PUBLIC_GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: { name, email }
        })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      return {
        success: true,
        user: result.data.createUser
      };
    } catch (err) {
      console.error('Error in createUser:', err);
      return fail(500, { error: err.message });
    }
  }
};