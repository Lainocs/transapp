export const load = async ({ fetch }) => {
  try {
    const query = `{
      users {
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

    const users = result.data.users;

    return { users };

  } catch (error) {
    return {
      status: 500,
      error: error.message
    };
  }
};