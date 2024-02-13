<script>
    // Importation de données ou autres besoins pour votre script
</script>

<main>
    <section class="contact-info">
        <div class="flex-1 tt" >
            <h2>Nos coordonnées</h2>
            <address>
                <strong>CyberManiac</strong><br>
                72 boulevard alexandre de fraissinette<br>
                42100 St Etienne<br>
                <br>
                Fixe : <a href="tel:+04487666733">04.87.66.67.33</a><br>
                Mobile : <a href="tel:+0684252527">06.84.25.25.27</a><br>
                Email : <a href="mailto:cybermaniac42@gmail.com">cybermaniac42@gmail.com</a>
            </address>
        </div>

        <div>
            <img src="/magasin.jpg" alt="Magasin CyberManiac" class="store-image">
        </div>

    </section>
</main>

<style>
    main {
        font-family: 'Arial', sans-serif;
        padding: 2rem;
        line-height: 1;
    }

    .store-image {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        display: block;
        border-radius: 8px;
    }

    .tt{
        margin-right: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin-bottom: var(--spacing-m);
    }

    .contact-info {
        display: flex;
        flex-wrap: wrap;
    }

    address {
        white-space: pre-line; /* Preserves line breaks and spaces */
    }

    a {
        color: #0077cc;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    h2 {
        
        margin-bottom: 1rem;
        font-size: 1.4rem;
        color: #333;
    }

    p {
        margin-bottom: 1rem;
    }

    @media(max-width: 650px) {
        main {
            font-size: 0.8rem;
        }
    }
</style>
