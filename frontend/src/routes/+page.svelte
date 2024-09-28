<script>
	let appName = "Transapp";
	let description = "Your ultimate transaction management tool, providing seamless and accurate financial tracking in real-time.";
	let features = [
		"Real-time transaction tracking",
		"User-friendly interface",
		"Secure data management",
		"Comprehensive financial reports"
	];
</script>

<div class="hero">
	<div class="container">
		<h1>{appName}</h1>
		<p class="description">{description}</p>
		<a href="/transactions" class="cta-button">Get Started</a>
	</div>
</div>

<div class="features">
	<div class="container">
		<h2>Key Features</h2>
		<div class="feature-grid">
			{#each features as feature}
				<div class="feature-item">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span>{feature}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.hero {
		background: linear-gradient(135deg, #1a202c, #2d3748);
		padding: 4rem 0;
		text-align: center;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		color: #f7fafc;
		font-size: 3.5rem;
		margin-bottom: 1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.description {
		color: #e2e8f0;
		font-size: 1.5rem;
		margin-bottom: 2rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.25rem;
		color: #1a202c;
		background-color: #4299e1;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
		background-color: #3182ce;
	}

	.features {
		padding: 4rem 0;
		background-color: #2d3748;
	}

	h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #f7fafc;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.feature-item {
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		color: #e2e8f0;
	}

	.feature-item svg {
		width: 24px;
		height: 24px;
		margin-right: 1rem;
		color: #4299e1;
	}
</style>
