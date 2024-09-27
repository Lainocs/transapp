<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data;

	$: users = data.users || [];

	function handleDelete() {
		return async ({ result }) => {
			if (result.type === 'success' && result.data.success) {
				// Refresh the page to show updated user list
				goto('/users', { invalidateAll: true });
			} else if (result.type === 'failure') {
				console.error('Error deleting user:', result.data?.error);
				// Optionally, you can show an error message to the user here
			}
		};
	}

	function navigateToCreateUser() {
		goto('/users/create');
	}
</script>

<div class="container">
	<h1>User List</h1>

	<button on:click={navigateToCreateUser}>Create New User</button>

	<div class="user-list">
		{#if users.length > 0}
			{#each users as user (user.id)}
				<div class="user-card">
					<h2>{user.name}</h2>
					<p><strong>Email:</strong> {user.email}</p>
					<form 
						method="POST" 
						action="?/deleteUser" 
						use:enhance={handleDelete}
					>
						<input type="hidden" name="id" value={user.id} />
						<button type="submit" class="delete-btn">Delete User</button>
					</form>
				</div>
			{/each}
		{:else}
			<p>No users found.</p>
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

	.user-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.user-card {
		background-color: #2d3748;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		transition: transform 0.2s, box-shadow 0.2s;
		position: relative;
	}

	.user-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
	}

	.user-card h2 {
		margin: 0 0 1rem;
		font-size: 1.25rem;
		color: #f4f4f4;
	}

	.user-card p {
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