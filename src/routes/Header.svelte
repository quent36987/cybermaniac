<script>
	let services = [
		{
			title: "Vente d'équipements",
			link: 'vente'
		},
		{
			title: 'Entretiens de vos équipements',
			link: 'entretiens'
		},
		{
			title: 'Déplacement à domicile',
			link: 'domicile'
		},
		{
			title: 'Impression 3D FDM et Résine',
			link: 'impression3d'
		},
		{
			title: 'Modélisation Technique',
			link: 'impression3d#modelisation'
		},
		{
			title: 'Vente de consommables',
			link: 'impression3d#consommables'
		}
	];
</script>

<header>
	<a class="logo" href="/">
		<img src="/logo.png" alt="Company Logo" class="image" />
	</a>

	<div class="link">
		<div class="dropdown">
			<a>Services</a>
			<div class="dropdown-content">
				{#each services as service}
					<a href="/about/{service.link}">{service.title}</a>
				{/each}
			</div>
		</div>
		<a href="/boutique">Boutique</a>
		<a href="/plan">Plan d'accès</a>
		<a href="/contact">Contact</a>
		
		<img src="/logoFRP2I.png" alt="FR2PI" class="FR2PI" />
	</div>
</header>

<style>
	@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 3%;
	}

	.image {
		width: 100%;
	}

	.logo {
		width: 30rem;
	}

	.FR2PI{
		width: 10rem;
	}

	.link {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 2rem;
		justify-content: center;
		font-family: 'Quicksand', sans-serif;
		font-size: 1.5rem;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		z-index: 1;
		background-color: #f9f9f9;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		width: max-content;
	}

	.dropdown-content a {
		display: block; /* Cela force chaque lien à occuper sa propre ligne */
		padding: 10px 15px; /* Ajoutez un peu d'espace autour de chaque lien pour un meilleur aspect visuel */
		text-decoration: none; /* Enlevez le soulignement des liens */
		color: black; /* Couleur de texte pour les liens */
	}

	.dropdown-content a:hover {
		background-color: #ddd; /* Changement de couleur d'arrière-plan lors du survol d'un lien */
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	a {
		color: #4075a6;
	}
</style>
