<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	let active = null;

	function toggleAccordion(id) {
		active = active === id ? null : id;
	}
</script>

<style>
	/* Votre CSS ici */
	.accordion {
		border-top: 1px solid #ccc;
		cursor: pointer;
		padding: 10px;
		background-color: white;
		color: green;
	}
	.accordion-content {
		display: none;
		padding: 10px;
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
	.accordion-content.active {
		display: block;
	}
	.accordion-title {
		font-size: 1.2rem;
	}
</style>

<div>
	<div class="accordion" on:click={() => toggleAccordion(1)}>
		<div class="accordion-title">Entretien Informatique</div>
	</div>
	<div class="accordion-content {active === 1 ? 'active' : ''}">
		<p>Devis gratuit et services de qualité...</p>
		<a href="/entretien" class="accordion-link">En savoir plus</a>
	</div>
	<!-- Répétez pour les autres services -->
</div>
