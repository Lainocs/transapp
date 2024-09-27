<script>
	let appName = "Transapp";
	let description = "Transapp is your ultimate translation companion, providing seamless and accurate translations in real-time.";
</script>

<style>
	.container {
		color: #f4f4f4;
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}
	.header {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	.description {
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}
	.cta-button {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		color: white;
		background-color: #007BFF;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
	}
	.cta-button:hover {
		background-color: #0056b3;
	}
</style>

<div class="container">
	<div class="header">{appName}</div>
	<div class="description">{description}</div>
	<a href="/transactions" class="cta-button">Get Started</a>
</div>
