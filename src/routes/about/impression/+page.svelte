<script>
    import SibApiV3Sdk from 'sib-api-v3-sdk';

    let prenomNom = '';
    let email = '';
    let message = '';
    let matiere = '';
    let quantite = '';
    let files;

    const sendEmail = async () => {
        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`);
        }


    };
</script>

<div>
    <h2>Impression personnalisée</h2>

    <form on:submit|preventDefault={sendEmail}>
        <label for="prenomNom">Prénom et Nom:</label>
        <input type="text" id="prenomNom" bind:value={prenomNom} required/>

        <label for="email">Adresse email:</label>
        <input type="email" id="email" bind:value={email} required/>

        <label for="message">Un p'tit message ?</label>
        <textarea id="message" bind:value={message}></textarea>

        <label for="matiere">Choix de la matière:</label>
        <select id="matiere" bind:value={matiere}>
            <option value="PLA">PLA</option>
            <option value="PETG">PETG</option>
        </select>

        <label for="quantite">Quantité:</label>
        <input type="number" id="quantite" bind:value={quantite} required/>

        <label for="fichier">Lien vers le fichier:</label>
        <input bind:files id="many" multiple type="file" accept=".stl,.3mf"/>

        <button type="submit">Envoyer</button>
    </form>
</div>
<style>
    div {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 5px;
    }

    h2 {
        font-size: 24px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        font-weight: bold;
        margin-top: 10px;
    }

    input,
    select {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    textarea {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: vertical;
    }

    button {
        padding: 10px 20px;
        background-color: #0074d9;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }

    button:hover {
        background-color: #0056b3;
    }

    /* Style pour le champ de fichier */
    input[type="file"] {
        margin: 0;
        border: none;
        padding: 0;
    }
</style>

