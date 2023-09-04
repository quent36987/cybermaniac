const services = [
	{
		title: 'Entretiens de vos équipements',
		description:
			"Notre point fort réside dans l'entretien informatique. Si vous rencontrez un problème avec votre matériel, nous pouvons prendre en charge la réparation et l'entretien de votre ordinateur. De plus, chez nous, le devis est toujours gratuit, vous permettant ainsi d'obtenir une évaluation de la situation sans frais supplémentaires. Notre objectif est de fournir un service de qualité et de garantir la satisfaction de nos clients."
	},
	{
		title: 'Vente Informatique',
		description:
			"Nous proposons également la vente de matériel informatique, offrant une large gamme d'options allant des ordinateurs de bureautique aux ordinateurs gaming, des ordinateurs portables aux configurations personnalisées."
	},
	{
		title: 'Déplacement à domicile',
		description:
			"Afin de faciliter votre quotidien, nous avons établi un partenariat avec Frozeyes IMR pour vous proposer des interventions à domicile. Que ce soit pour résoudre des problèmes qui ne peuvent être réglés en boutique ou si vous ne pouvez pas vous déplacer avec votre ordinateur, l'équipe de Frozeyes IMR se rend chez vous. Leurs techniciens vous fourniront une assistance personnalisée et résoudront les problèmes directement sur place."
	},
	{
		title: 'Impression 3D FDM',
		description:
			"Nous utilisons l'impression 3D pour réparer vos objets cassés, créer vos propres objets de collection et donner forme à vos projets personnels ou professionnels."
	},
	{
		title: 'Impression 3D Résine',
		description:
			'Nous utilisons la résine pour créer vos propres objets de collection et donner forme à vos projets personnels ou professionnels qui demandent une grande précision.'
	},
	{
		title: 'Modélisation Technique',
		description:
			"Nous offrons un service de modélisation 3D qui permet de redonner vie à vos objets cassés ainsi qu'à tous vos plans. Grâce à notre expertise en modélisation, nous pouvons recréer en 3D des objets endommagés ou des plans existants avec précision."
	},
	{
		title: 'Matériaux',
		description:
			"Nous utilisons des matériaux adaptés à vos projets et à vos besoins. Nous sommes là pour vous conseiller et vous guider dans le choix des matériaux les plus appropriés. En plus de cela, nous proposons également la vente de matières premières pour que vous puissiez réaliser vos propres projets d'impression 3D."
	}
];

function title(slug: string) {
	const index = parseInt(slug);
	if (index >= 0 && index < services.length) {
		return services[index].title;
	} else {
		return 'NAN';
	}
}

function description(slug: string) {
	const index = parseInt(slug);
	if (index >= 0 && index < services.length) {
		return services[index].description;
	} else {
		return 'Description non trouvée'; // ou autre message d'erreur
	}
}

export function load({ params }) {
	console.log(params);
	return {
		title: title(params.slug),
		description: description(params.slug),
		images: [] // (à remplir si nécessaire)
	};
}
