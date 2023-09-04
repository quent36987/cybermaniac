<script>
	let services = [
		'Entretiens de vos équipements',
		'Vente Informatique',
		'Déplacement à domicile',
		'Impression 3D FDM',
		'Impression 3D Résine',
		'Modélisation Technique',
		'Matériaux'
	];
</script>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 5%;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: white;
		border: 1px solid #ddd;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>

<header>
	<img src="src/lib/logo.png" alt="Company Logo" />

	<nav>
		<div class="dropdown">
			Services
			<div class="dropdown-content">
				{#each services as service}
					<a href="#">{service}</a>
				{/each}
			</div>
		</div>
		<a href="#">Boutique</a>
		<a href="#">Plan d'accès</a>
		<a href="#">Nous contacter</a>
	</nav>
</header>
