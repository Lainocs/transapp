<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data;

	$: transactions = data.transactions || [];

	function handleDelete() {
		return async ({ result }) => {
			if (result.type === 'success' && result.data.success) {
				// Refresh the page to show updated transaction list
				goto('/transactions', { invalidateAll: true });
			} else if (result.type === 'failure') {
				console.error('Error deleting transaction:', result.data?.error);
				// Optionally, you can show an error message to the user here
			}
		};
	}

	function navigateToCreateTransaction() {
		goto('/transactions/create');
	}
</script>

<div class="container">
	<h1>Transaction List</h1>

	<button on:click={navigateToCreateTransaction}>Create New Transaction</button>

	<div class="transaction-list">
		{#if transactions.length > 0}
			{#each transactions as transaction (transaction.id)}
				<div class="transaction-card">
					<h2>{transaction.description}</h2>
					<p><strong>Payment Type:</strong> {transaction.paymentType}</p>
					<p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
					<p><strong>User:</strong> {transaction.user.email}</p>
					<form 
						method="POST" 
						action="?/deleteTransaction" 
						use:enhance={handleDelete}
					>
						<input type="hidden" name="id" value={transaction.id} />
						<button type="submit" class="delete-btn">Delete Transaction</button>
					</form>
				</div>
			{/each}
		{:else}
			<p>No transactions found.</p>
		{/if}
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		color: #f4f4f4;
		margin-bottom: 1.5rem;
		font-size: 2rem;
	}

	button {
		padding: 0.75rem 1.5rem;
		background-color: #007BFF;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-bottom: 2rem;
		font-size: 1rem;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #0056b3;
	}

	.transaction-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.transaction-card {
		background-color: #2d3748;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		transition: transform 0.2s, box-shadow 0.2s;
		position: relative;
	}

	.transaction-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}

	.transaction-card h2 {
		margin: 0 0 1rem;
		font-size: 1.25rem;
		color: #f4f4f4;
	}

	.transaction-card p {
		margin: 0.5rem 0;
		color: #cbd5e0;
	}

	strong {
		color: #63b3ed;
	}

	.delete-btn {
		background-color: #ff4136;
		margin-top: 1rem;
	}

	.delete-btn:hover {
		background-color: #ff1a1a;
	}
</style>