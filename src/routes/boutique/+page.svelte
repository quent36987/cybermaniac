<script>
	let articles = [
		{
			id: 1,
			title: 'Article 1',
			description: "Description de l'article 1",
			price: 10,
			photo: '/src/lib/boutique/dragon.jpg'
		},
		{
			id: 2,
			title: 'Article 2',
			description: "Description de l'article 2",
			price: 20,
			photo: '/src/lib/boutique/dragon.jpg'
		}
		// ... ajoutez d'autres articles ici
	];

	let panier = [];

	function addToCart(article) {
		if (!panier.find((item) => item.id === article.id)) {
			panier.push(article);
		}
	}

	let showCart = false;
</script>

<section>
ca sera pas ca x) (en cours de dev)
	<div class="articles-container">
		{#each articles as article (article.id)}
			<div class="article">
				<img class="img" src={article.photo} alt={article.title} />
				<div class="info">
					<div>{article.title}</div>
					<div>{article.price}€</div>
				</div>
				<div class="description">
                    <button class="custom-btn btn-3"><span>Ajouter</span></button>
                    <button class="plus">En savoir plus</button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.articles-container {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
        padding: var(--spacing-l);
	}

.img{
    width: 100%;
    height: 100%;

}

.plus{
    background-color: #fff;
    color: #000;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.plus:hover{
    background-color: #000;
    color: #fff;
}

	.article {
		position: relative;
		width: 200px;
		height: 300px;
        border-radius: var(--border-radius);
        overflow: hidden;
	}

	.article img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info {
		position: absolute;
		bottom: 10px;
		left: 10px;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		padding: 5px;
        border-radius: var(--border-radius);
	}


	.description {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 10px;
	}

	.article:hover .description {
		display: flex;
        flex-direction: column;
		align-items: center;
		justify-content: center;
        gap: var(--spacing-l);
	}

	.cart-button {
		background: white;
		color: black;
		border: none;
		padding: 5px 10px;
	}

    .custom-btn {
        width: 130px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
        7px 7px 20px 0px rgba(0,0,0,.1),
        4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;
    }
    /* 3 */
    .btn-3 {
        background: rgb(0,172,238);
        background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border: none;

    }
    .btn-3 span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    .btn-3:before,
    .btn-3:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgba(2,126,251,1);
        transition: all 0.3s ease;
    }
    .btn-3:before {
        height: 0%;
        width: 2px;
    }
    .btn-3:after {
        width: 0%;
        height: 2px;
    }
    .btn-3:hover{
        background: transparent;
        box-shadow: none;
    }
    .btn-3:hover:before {
        height: 100%;
    }
    .btn-3:hover:after {
        width: 100%;
    }
    .btn-3 span:hover{
        color: rgba(2,126,251,1);
    }
    .btn-3 span:before,
    .btn-3 span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: rgba(2,126,251,1);
        transition: all 0.3s ease;
    }
    .btn-3 span:before {
        width: 2px;
        height: 0%;
    }
    .btn-3 span:after {
        width: 0%;
        height: 2px;
    }
    .btn-3 span:hover:before {
        height: 100%;
    }
    .btn-3 span:hover:after {
        width: 100%;
    }


</style>
