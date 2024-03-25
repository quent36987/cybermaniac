<script>
</script>

<div class="content-wrapper">
    <div class="title">Déplacement à domicile</div>

    <div class="page">
        <div class="desc">
            Vous pouvez faire appel à notre service de déplacement à domicile grâce à notre partenaire de chez FROZEYES
            IMR.<br/><br/>

            Notre technicien se rendra à votre domicile pour tout problème informatique (MAC ou PC) ou une installation
            de matériel acheté en boutique.<br/><br/>

            Prise de rendez-vous en boutique ou au <strong> 06.95.84.14.57 </strong>
            N’hésitez pas !
        </div>

        <div class="images">
            <img class="image" src="/about/domicile/image1.png" alt="Déplacement à domicile"/>
        </div>
    </div>

    <div class="tariffs-wrapper">
        <div class="title">Zones et Tarifs</div>

        <div class="container">


            <div>
                <img class="image2" src="/about/domicile/image2.png" alt="Déplacement à domicile"/>
            </div>

            <div class="tariff-section">
                <div class="zone" style="background-color: #98FB98;">
                    <h2>Zone Verte :</h2>
                    <p>Tarif Minimum de Déplacement : 20€.</p>
                </div>

                <div class="zone" style="background-color: #FFFF99;">
                    <h2>Zone Jaune :</h2>
                    <p>Tarif Minimum de Déplacement : 55€.</p>
                </div>

                <div class="zone">
                    <h2>Hors Zones (En dehors de Saint-Étienne) :</h2>
                    <p>Tarif Minimum de Déplacement : 55€</p>
                    <p>Frais Additionnels : 1.5€ par kilomètre parcouru.</p>
                </div>

            </div>
        </div>
                <div class="supplements">
                    <h2>Suppléments et Conditions :</h2>

                    <p><strong>Supplément pour Temps Additionnel :</strong><br/>
                        20€ par tranche de 30 minutes supplémentaires après la première heure sur place.</p>

                    <p><strong>Interruption du Service :</strong><br/>
                        Si la situation n'évolue pas après 2 heures sur place, le technicien se réserve le droit
                        d'interrompre le rendez-vous pour éviter des frais supplémentaires et garantir un service de
                        qualité.</p>
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

    .container {
        display: flex;
        gap: var(--spacing-l);
    }

    .page {
        display: flex;
        justify-content: space-between;
        gap: var(--spacing-l);
    }

    .desc {
        flex: 2.5;
        line-height: 1.6;
        font-size: 1rem;
    }

    .desc strong {
        color: #333;
        font-weight: bold;
    }

    .images {
        flex: 1;
    }

    .image2 {
        max-width: 650px;
        margin-bottom: var(--spacing-m);
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


    .tariffs-wrapper {
        margin-top: var(--spacing-xl);
    }

    .tariff-section {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-l);
    }

    .zone, .supplements {
        background-color: #F8F8F8;
        padding: var(--spacing-m);
        border-radius: 5px;
    }

    .zone h2, .supplements h2 {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: var(--spacing-s);
    }

    .zone p, .supplements p {
        font-size: 1rem;
        color: #555;
        line-height: 1.6;
    }

    @media screen and (max-width: 500px) {
        .title {
            font-size: 1.2rem;
        }

        .content-wrapper {
            padding: var(--spacing-m);
        }

        .desc {
            font-size: 0.8rem;
        }

        .zone {
            font-size: 0.8rem;
        }

        .image2 {
            max-width: 100%;
        }

        .container {
            flex-direction: column;
            gap: 0px;
        }
    }

</style>
