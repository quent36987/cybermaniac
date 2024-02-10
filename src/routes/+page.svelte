<script>
    let activeIndex = 0;
    let cardElements = [];
    let dots = [];
    const services = [
        {
            name: 'Vente Informatique',
            description:
                "Large gamme d'ordinateurs, du bureautique au gaming et configurations personnalisées.",
            image: '/vente.png',
            link: 'vente'
        },
        {
            name: 'Impression 3D',
            description: "Réparation d'objets et création personnalisée grâce à l'impression 3D.",
            image: '/impression.jpg',
            link: 'impression3d'
        },
        {
            name: 'Déplacement à domicile',
            description:
                'Partenariat avec Frozeyes IMR pour des interventions à domicile. Solutions rapides par des experts.',
            image: '/domicil.jpg',
            link: 'domicile'
        },
    ];

    function setActive(index) {
        activeIndex = index;
    }

    function setActiveAndCenter(index) {


        setActive(index);

        const card = cardElements[index];
        const carousel = document.querySelector('.carousel');
        const rect = card.getBoundingClientRect();
        const carouselRect = carousel.getBoundingClientRect();
        const scrollLeft =
            rect.left - carouselRect.left + carousel.scrollLeft - (carousel.clientWidth - rect.width) / 2;

        carousel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }

    function centerCard(event, index) {
        console.log("e")
        if (index === activeIndex) {
            window.location.href = "/about/" + services[index].link;
        }
        const card = event.currentTarget;
        const carousel = document.querySelector('.carousel');
        const rect = card.getBoundingClientRect();
        const carouselRect = carousel.getBoundingClientRect();
        const scrollLeft =
            rect.left - carouselRect.left + carousel.scrollLeft - (carousel.clientWidth - rect.width) / 2;

        carousel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }


</script>

<section class="game-section">
<!--    <img class="image" src="/images.gif"/>-->
    <div class="banner">
        <img src="/banner.jpg" alt="Impression 3D - Votre créativité sans limite">
        <div class="banner-text">
            <h2>Votre créativité sans limite</h2>
            <div class="banner-sub">Découvrez nos solutions d'impression 3D</div>
        </div>
    </div>


    <div class="line-title">Nos services</div>
    <div class="carousel">
        {#each services as game, index}
            <div
                    class="item {activeIndex === index ? 'active' : ''}"
                    style="background-image: url({game.image});"
                    on:click={(e) => {
					centerCard(e,index);
					setActive(index);
				}}
                    bind:this={cardElements[index]}
            >
                <div class="item-desc">
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                    <a class="link" href="/about/{game.link}">En savoir plus</a>
                </div>
            </div>
        {/each}
    </div>
    <div class="carousel-dots">
        {#each services as card, index}
			<span
                    class="dot {activeIndex === index ? 'active' : ''}"
                    on:click={() => setActiveAndCenter(index)}
                    bind:this={dots[index]}
            />
        {/each}
    </div>
</section>

<style>

    .banner {
        width: 90vw;
        height: 17vh;
        border-radius: var(--border-radius);
        background: #4075a6;
        position: relative;
        margin-bottom: var(--spacing-l);
        overflow: hidden;
    }

    .banner img {
        width: 100%;
    }

    .banner-text {
        position: absolute;
        top: 20px;
        left: 20px;
        color: #fff;
        background: rgba(68, 68, 68, 0.73);
        border-radius: var(--border-radius);
        padding: 5px;
    }

    .banner-text h2 {
        font-size: 24px;
        font-weight: bold;
        margin: 0px;
    }

    .banner-sub {
        font-size: 16px;
    }



    /* Title style */
    .line-title {
        font-family: Century Gothic, Arial, sans-serif;
        font-size: 30px;
        margin-bottom: var(--spacing-l);
    }

    .image{
        height: 15vh;
        border-radius: var(--border-radius);
    }


    /*img {*/
    /*    max-width: 100%;*/
    /*    height: auto;*/
    /*    transition: transform 0.5s ease;*/
    /*}*/

    .carousel1 {
        display: flex;
        /*gap: var(--spacing-m);*/
        overflow: hidden;
        height: 10vh;
    }


    .line-title::before,
    .line-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        border-radius: 2px;
    }

    /* Middle section CSS */
    .game-section {
        padding: 20px 50px;
    }

    .carousel {
        display: flex;
        gap: 16px; /* Espacement entre les cartes */
        scroll-snap-type: x mandatory;
        overflow-x: hidden;
        scrollbar-width: none;
        font-family: Century Gothic, Arial, sans-serif;
    }

    .item {
        margin: 0 15px 30px;
        width: 320px;
        height: 400px;
        display: flex;
        align-items: flex-end;
        background: #343434 no-repeat center center / cover;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        flex: 0 0 auto;
        scroll-snap-align: start;
    }


    .item.active {
        width: 500px;
        box-shadow: 12px 20px 20px rgba(0, 0, 0, 0.25);
    }

    .item:after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .item-desc {
        padding: 0 24px 24px; /* Ajouté plus de padding en bas */
        color: #fff;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transform: translateY(calc(100% - 100px));
        transition: all 0.4s ease-in-out;
    }

    .item-desc h3 {
        font-size: 1.5em; /* Augmenté la taille de la police */
        margin-bottom: 10px; /* Espacement entre le titre et le texte de description */
    }

    .item.active .item-desc {
        transform: none;
    }

    .item-desc p {
        opacity: 0;
        transform: translateY(32px);
        transition: all 0.4s ease-in-out 0.2s;
        font-weight: bold;
    }

    .item.active .item-desc p {
        opacity: 1;
        transform: translateY(0);
    }

    .link {
        display: inline-block;
        padding: 8px 16px;
        background: #0064e7;
        border-radius: 4px;
        margin-top: 16px;
        color: #fff;
        font-weight: bold;
        transition: all 0.4s ease-in-out;
    }

    .carousel-dots {
        text-align: center;
        margin-top: 10px;
    }

    .dot {
        height: 10px;
        width: 10px;
        margin: 0 4px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
    }

    .dot.active {
        background-color: #333;
    }

    @media (max-width: 650px) {
        .item {
            width: 150px;
            height: 300px;
        }

        .item-desc {
            padding: 0 12px 12px;
            font-size: 0.8em;
        }

        .item-desc h3 {
            font-size: 1em;
        }

        .link {
            font-size: 0.8em;
        }

        .carousel {
            overflow-x: scroll;
            scroll-snap-type: none;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
        }

        .item.active {
            width: 250px;
        }

        .game-section {
            padding: 5px 5px;
        }
    }
</style>
