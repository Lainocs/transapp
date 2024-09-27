<script>
	export let data;
</script>

<div class="user-list">
	{#each data.users as user}
		<div class="user-card">
			<h2>{user.name}</h2>
			<p>{user.email}</p>
		</div>
	{/each}
</div>

<style>
	.user-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	.user-card {
		background-color: #333;
		color: #f4f4f4;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}

	.user-card:hover {
		transform: translateY(-5px);
	}

	h2 {
		margin: 0 0 0.5rem 0;
		font-size: 1.25rem;
	}

	p {
		margin: 0;
		font-size: 1rem;
	}
</style>