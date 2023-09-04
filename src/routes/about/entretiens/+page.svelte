<script>
	// Votre script JavaScript si nécessaire
</script>

<div class="content-wrapper">
	<div class="title">Entretiens de vos équipements</div>

	<div class="page">
		<div class="desc">
			Chez Cybermaniac, nous proposons un service d'entretien pour vos imprimantes 3D. Que vous rencontriez des problèmes de fonctionnement ou que vous préfériez être accompagné lors du montage de votre machine, nous sommes là pour vous aider.<br/><br/>

			Notre équipe expérimentée vous guidera dans toutes les étapes, depuis le montage initial jusqu'à la configuration du slicer, qui est le logiciel de découpe des modèles 3D.<br/><br/>

			Si vous ne souhaitez pas vous occuper du montage de votre imprimante, nous sommes également en mesure de le faire pour vous. Nous prenons en charge toutes les étapes, de l'assemblage à la mise en marche, afin de vous assurer un fonctionnement optimal.<br/><br/>

			En plus de cela, nous effectuons l'entretien régulier de votre imprimante 3D, ainsi que le remplacement de pièces défectueuses ou usées. Notre objectif est de vous offrir une expérience fluide et sans souci avec votre imprimante 3D.
		</div>

		<div class="images">
			<img class="image" src="/about/entretiens/image1.jpg" alt="Entretiens d'imprimantes" />
		</div>
	</div>
</div>

<style>
	.content-wrapper {
		max-width: 1200px;
		margin: auto;
		padding: var(--spacing-l);
	}

	.title {
		font-family: 'Century Gothic', Arial, sans-serif;
		font-size: 30px;
		padding-bottom: var(--spacing-l);
		border-bottom: 3px solid #E0E0E0;
		margin-bottom: var(--spacing-l);
	}

	.page {
		display: flex;
		justify-content: space-between;
		gap: var(--spacing-l);
	}

	.desc {
		flex: 2.5;
		line-height: 1.6;
		font-size: 18px;
	}

	.desc strong {
		color: #333;
		font-weight: bold;
	}

	.images {
		flex: 1;
	}

	.image {
		max-width: 100%;
		display: block;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		transition: transform 0.3s ease;
	}

	.image:hover {
		transform: scale(1.05);
	}
</style>
