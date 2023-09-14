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
		<img src="/logoFRP2I.png" alt="FR2PI" class="FR2PI" />
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

	.FR2PI {
		display: none;
		width: 5rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	@media (max-width: 600px) {
		.link{
			position: relative;
			margin-right: 0;
		}
		footer {
			padding: 12px 0;
			justify-content: space-between;
		}
		.FR2PI {
			display: block;
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}
</style>
