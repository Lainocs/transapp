export const load = async ({ fetch }) => {
  try {
    const query = `{
      transactions {
        description
        paymentType
        amount
        user {
          email
        }
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

    const transactions = result.data.transactions;

    return { transactions };

  } catch (error) {
    return {
      status: 500,
      error: error.message
    };
  }
};