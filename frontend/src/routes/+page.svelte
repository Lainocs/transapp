<script>
	let appName = "Transapp";
	let description = "Transapp is your ultimate transaction management tool, providing seamless and accurate financial tracking in real-time.";
</script>

<div class="container">
	<h1>{appName}</h1>
	<p class="description">{description}</p>
	<a href="/transactions" class="cta-button">Get Started</a>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		color: #f4f4f4;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.description {
		color: #cbd5e0;
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}

	.cta-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		color: white;
		background-color: #007BFF;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
		transition: background-color 0.2s;
	}

	.cta-button:hover {
		background-color: #0056b3;
	}
</style>
