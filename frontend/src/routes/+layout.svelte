<script>
	// @ts-ignore
	import { page } from '$app/stores';
	export let title = 'Transapp';

	$: currentPath = $page.url.pathname;
</script>

<div>
	<header>
		<h1>{ title }</h1>
		<nav>
			<a href="/" class:active={currentPath === '/'}>Home</a>
			<a href="/transactions" class:active={currentPath === '/transactions'}>Transactions</a>
			<a href="/users" class:active={currentPath === '/users'}>Users</a>
		</nav>
	</header>
	<main>
		<slot></slot>
	</main>
</div>

<style>
	header {
		border-bottom: 1px solid #ccc;
		color: white;
		padding: 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	nav {
		display: flex;
	}
	nav a {
		color: white;
		text-decoration: none;
		margin-right: 1em;
	}
	nav a.active {
		font-weight: bold;
		border-bottom: 2px solid white;
	}
	main {
		padding: 1em;
	}
</style>