import { error, fail } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
  return fetchUsers(fetch);
};

export const actions = {
  deleteUser: async ({ request, fetch }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    const query = `
      mutation DeleteUser($id: ID!) {
        deleteUser(id: $id) {
          success
          user {
            id
            name
            email
          }
        }
      }
    `;

    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: { id }
        })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      if (!result.data || !result.data.deleteUser) {
        throw new Error('Unexpected response structure');
      }

      return {
        success: true,
        deletedUser: result.data.deleteUser.user
      };
    } catch (err) {
      console.error('Error in deleteUser:', err);
      return fail(500, { error: err.message });
    }
  }
};

async function fetchUsers(fetch) {
  const query = `{
    users {
      id
      name
      email
    }
  }`;

  try {
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

    return { users: result.data.users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { users: [] };
  }
}
