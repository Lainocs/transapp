import { fail } from '@sveltejs/kit';
import { PUBLIC_GRAPHQL_URL } from '$env/static/public';

export async function load({ fetch }) {
  try {
    const query = `
      query {
        users {
          id
          name
          email
        }
      }
    `;

    const response = await fetch(PUBLIC_GRAPHQL_URL, {
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
      users: result.data.users
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      users: []
    };
  }
}

export const actions = {
  createTransaction: async ({ request, fetch }) => {
    const formData = await request.formData();
    const userId = formData.get('userId');
    const description = formData.get('description');
    const paymentType = formData.get('paymentType');
    const amount = parseFloat(formData.get('amount'));

    const query = `
      mutation CreateTransaction($userId: ID!, $description: String!, $paymentType: String!, $amount: Float!) {
        createTransaction(userId: $userId, description: $description, paymentType: $paymentType, amount: $amount) {
          id
          description
          paymentType
          amount
          user {
            email
          }
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
          variables: { userId, description, paymentType, amount }
        })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      return {
        success: true,
        transaction: result.data.createTransaction
      };
    } catch (err) {
      console.error('Error in createTransaction:', err);
      return fail(500, { error: err.message });
    }
  }
};
