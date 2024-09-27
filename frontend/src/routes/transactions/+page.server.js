import { error, fail } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
  return fetchTransactions(fetch);
};

export const actions = {
  deleteTransaction: async ({ request, fetch }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    const query = `
      mutation DeleteTransaction($id: ID!) {
        deleteTransaction(id: $id) {
          success
          transaction {
            id
            description
            paymentType
            amount
            user {
              email
            }
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

      if (!result.data || !result.data.deleteTransaction) {
        throw new Error('Unexpected response structure');
      }

      return {
        success: true,
        deletedTransaction: result.data.deleteTransaction.transaction
      };
    } catch (err) {
      console.error('Error in deleteTransaction:', err);
      return fail(500, { error: err.message });
    }
  }
};

async function fetchTransactions(fetch) {
  const query = `{
    transactions {
      id
      description
      paymentType
      amount
      user {
        email
      }
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

    return { transactions: result.data.transactions };
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return { transactions: [] };
  }
}