<script>
    import {env} from '$env/dynamic/public'

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
        },
       /* {
            title: 'Impression personnalisée',
            link: 'impression'
        }*/
    ];
    let isDropdownOpen = false;

    function handleLinkClick(event, url) {
        event.preventDefault();  // Empêche la navigation immédiate
        isDropdownOpen = false; // Ferme le dropdown
        location.href = url;    // Navigue vers l'URL programmatically
    }
</script>

<header>
    <div class="media-1">
        <a class="logo" href="/">
            <img src="/logo.png" alt="Company Logo" class="image"/>
        </a>
    </div>

    <div class="media-2">
        <div class="link">
            <div class="dropdown" on:click={() => isDropdownOpen = !isDropdownOpen}
                 on:mouseleave={() => isDropdownOpen = false}>
                <a>Services</a>
                <div class="dropdown-content {isDropdownOpen ? 'show' : ''}">
                    {#each services as service}
                        <a
                                href="/about/{service.link}"
                                on:click={e => handleLinkClick(e, "/about/" + service.link)}>
                            {service.title}
                        </a>
                    {/each}
                </div>
            </div>
            <a href="{env.PUBLIC_STORE_URL}" target="_blank">Boutique</a>
            <a href="/plan">Plan d'accès</a>
            <a href="/contact">Contact</a>
        </div>
        <a href="https://www.frp2i.fr/" target="_blank">
            <img src="/logoFRP2I.png" alt="FR2PI" class="FR2PI"/>
        </a>
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
        max-width: 30vw;
    }


    .logo {
        width: 30rem;

    }

    .FR2PI {
        width: 10rem;
    }

    @media (max-width: 650px) {
        .FR2PI {
            width: 5rem;
            display: none;
        }

        .image {
            max-width: none;
        }
    }

    .media-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
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

    @media (max-width: 650px) {
        .media-1 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        header {
            display: block;
            padding: 0.5rem 3%;
        }

        .link {
            font-size: 0.9rem;
            gap: 1.5rem;
        }
    }

    .dropdown-content.show {
        display: block;
    }
</style>
