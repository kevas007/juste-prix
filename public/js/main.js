function main() {
    let max;
    let envie;

    do {
        alert("Choisissez votre niveau \n 1 = facile : entre 1 et 10 \n 2 = moyen : entre 1 et 100 \n 3 = difficlle : entre 1 et 1000");
        let niveau = prompt('Enter la valeur du niveau');

        // vérifier que le niveau est ok entre 1 et 3
        while (niveau < 1 || niveau > 3) {
            alert("Erreur : niveau inconnu ! Entrez un nombre entre 1 et 3");
            niveau = prompt('Enter la valeur du niveau');
        }
        if (niveau == 1) {
            alert("Niveau facile");
            max = 10;
        } else {
            if (niveau == 2) {
                alert("Niveau moyen");
                max = 100;
            } else {
                alert("Niveau difficile");
                max = 1000;
            }
        }

        let justePrix = Math.floor(Math.random() * max) + 1;
        let nbTentatives = 0;
        alert("Le juste prix est " + justePrix);
        do {
            window.alert("Entrez votre proposition");
            proposition = prompt('Enter la valeur de la  proposition');
            while (proposition < 1 || proposition > max) {
                alert("Erreur : la proposition n'est pas dans les bornes entre 1 et " + max);
                proposition = prompt('Enter la valeur de la proposition');
            }
            nbTentatives = nbTentatives + 1;
            if (proposition != justePrix) {
                if (proposition > justePrix) {
                    alert("C'est moins");
                } else {
                    alert("C'est plus");
                }
            }
        } while (proposition != justePrix && nbTentatives < 5);
        if (proposition == justePrix) {
            alert("C'est gagné en " + nbTentatives + " tentatives");
        } else {
            alert("C'est perdu ! Le juste prix était  : " + justePrix);
        }
        alert("Voulez-vous rejouer ? oui/non");
        

        envie = prompt("Enter la valeur de l'envie");
    } while (envie == "oui");
    alert("Merci et au revoir");
}