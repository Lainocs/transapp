import { fail } from '@sveltejs/kit';

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
    const amount = formData.get('amount');
    const description = formData.get('description');
    const paymentType = formData.get('paymentType');
    const userId = formData.get('userId');

    if (!amount || !description || !paymentType || !userId) {
      return fail(400, { 
        error: 'All fields are required',
        amount,
        description,
        paymentType,
        userId
      });
    }

    try {
      const createTransactionQuery = `
        mutation {
          createTransaction(
            amount: ${parseFloat(amount)}, 
            description: "${description}", 
            paymentType: "${paymentType}", 
            userId: "${userId}"
          ) {
            id
            amount
            description
            paymentType
            user {
              id
              name
              email
            }
          }
        }
      `;

      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: createTransactionQuery })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      return { 
        success: true,
        transaction: result.data.createTransaction 
      };

    } catch (error) {
      return fail(500, {
        error: error.message,
        amount,
        description,
        paymentType,
        userId
      });
    }
  }
};
