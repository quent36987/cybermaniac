<script>
    // Votre script JavaScript si nécessaire
</script>

<div class="content-wrapper">
    <div class="title">Entretiens de vos équipements</div>

    <div class="page">
        <div class="desc">
            Chez CyberManiac, nous offrons un service d'entretien pour imprimantes 3D, couvrant tout, du montage à la
            configuration du slicer. Si vous préférez, nous pouvons monter l'imprimante pour vous, assurant son
            fonctionnement optimal. Nous effectuons également l'entretien régulier et le remplacement de pièces pour une
            expérience sans souci avec votre imprimante 3D.
        </div>

        <div class="images">
            <img class="image" src="/about/entretiens/image1.jpg" alt="Entretiens d'imprimantes"/>
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

    @media screen and (max-width: 500px) {
        .content-wrapper {
            padding: var(--spacing-m);
        }

        .title {
            font-size: 1rem;
        }

        .desc {
            font-size: 0.9rem;
        }
    }
</style>
