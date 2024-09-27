import { fail } from '@sveltejs/kit';

export const actions = {
  createUser: async ({ request, fetch }) => {
    // Get form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    // Validate form data
    if (!name || !email) {
      return fail(400, { 
        error: 'Name and email are required',
        name,
        email
      });
    }

    try {
      const query = `mutation {
        createUser(name: "${name}", email: "${email}") {
          name
          email
        }
      }`;

      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      return { 
        success: true,
        user: result.data.createUser 
      };

    } catch (error) {
      return fail(500, {
        error: error.message,
        name,
        email
      });
    }
  }
}