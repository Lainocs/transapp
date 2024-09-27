<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let name = '';
	let email = '';

	function navigateToUserList() {
		goto('/users');
	}

	function handleSubmit() {
		return async ({ result }) => {
			if (result.type === 'success') {
				navigateToUserList();
			}
		};
	}
</script>

<div class="container">
	<h1>Create New User</h1>

	<button on:click={navigateToUserList}>Back to User List</button>

	<form method="POST" action="?/createUser" use:enhance={handleSubmit}>
		{#if $page.form?.error}
			<p class="error">{$page.form.error}</p>
		{/if}
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" bind:value={name} required />
		</div>
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" bind:value={email} required />
		</div>
		<button type="submit">Create User</button>
	</form>
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

	form {
		background-color: #2d3748;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-top: 2rem;
	}

	div {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		color: #f4f4f4;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #4a5568;
		border-radius: 4px;
		background-color: #1a202c;
		color: #f4f4f4;
	}

	button {
		padding: 0.75rem 1.5rem;
		background-color: #007BFF;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		transition: background-color 0.2s;
		margin-bottom: 2rem;
	}

	button:hover {
		background-color: #0056b3;
	}

	button[type="submit"] {
		width: 100%;
		margin-top: 1rem;
	}

	.error {
		color: #fc8181;
		margin-bottom: 1rem;
	}
</style>