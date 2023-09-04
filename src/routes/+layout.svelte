<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>© cybermaniac2007</p>
		<a class="link" href="/condition">informations légales</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.link{
		position: absolute;
		right: 0;
		margin-right: var(--spacing-l);
	}

	main {
		flex: 1;
		padding: 0.5rem;
		margin: 0 auto;
		box-sizing: border-box;
		width: 100%;
	}

	footer {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
		color: var(--color-primary);
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
