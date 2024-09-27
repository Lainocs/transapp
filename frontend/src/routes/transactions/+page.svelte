<script>
	export let data;
</script>

<style>
	.transaction-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	.transaction-card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		transition: transform 0.2s;
	}

	.transaction-card:hover {
		transform: translateY(-5px);
	}

	.transaction-card h2 {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
		color: #333;
	}

	.transaction-card p {
		margin: 0.25rem 0;
		color: #666;
	}
</style>

<div class="transaction-list">
	{#each data.transactions as transaction}
		<div class="transaction-card">
			<h2>{transaction.description}</h2>
			<p><strong>Payment Type:</strong> {transaction.paymentType}</p>
			<p><strong>Amount:</strong> ${transaction.amount}</p>
			<p><strong>User:</strong> {transaction.user.email}</p>
		</div>
	{/each}
</div>