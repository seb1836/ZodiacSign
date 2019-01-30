var tabSigns = ["Verseau", "Poisson", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricorne"];

//alert("JS : OK");
document.getElementById("btn-valid").onclick = clickBtnValid;

document.getElementById("btn-valid").addEventListener("click", clickBtnValid);

/* Fonction appelée lors du click sur le bouton Valid */
function clickBtnValid() {
	//alert("Bouton valid cliqué");
	//alert(document.getElementById("txt-name").value);
	//alert(document.getElementById("txt-birth").value);
	
	// Récupérer le nom
	var name = document.getElementById("txt-name").value;

	// Récupérer la date de naissance en texte
	var birthdate = document.getElementById("txt-date").value;
	
	if(verifierDate(birthdate)) {	
		var sign = getSignFromDate(birthdate);

		document.getElementById("lbl-resultat").innerHTML = name + ", vous êtes " + sign;


		document.getElementById("img-resultat").src = "img/" + sign.toLowerCase() + ".png";		 	

	}
	else {
		document.getElementById("lbl-resultat").innerHTML = "";
		alert("Votre date est INVALIDE");		
	}
}

/*function convertirMonthEnSigne(pMois) {
	var indexEquivalent = (pMois + 9) % 12;
	console.log(indexEquivalent);
	return tabSigns[indexEquivalent];
}*/

function verifierDate(date) {
	var dateEstTailleValide = date.length == 10;

	/*if(dateEstTailleValide) {
		alert("Votre date est valide");
	}
	else {
		alert("Votre date est INVALIDE");		
	}*/

	/*if(!dateEstTailleValide) {
		alert("Votre date est INVALIDE");
	}*/


	if(dateEstTailleValide) {
		/*
		var troisiemeEstOk = date.charAt(2) == "/";
		console.log("Est ce que le troisieme caractère est ok : " + troisiemeEstOk);

		var sixiemeEstOk = date.charAt(5) == "/";
		console.log("Est ce que le sixieme caractère est ok : " + sixiemeEstOk);

		var possedeSlashes = troisiemeEstOk && sixiemeEstOk;
		*/

		var possedeSlashes = (date.charAt(2) == "/") && (date.charAt(5) == "/");

		// console.log("Est ce que notre date possède deux slashes : " + possedeSlashes);
		
		if(possedeSlashes) {
			//alert("Possède les deux slashes !!");

			var jour = Number(date.split("/")[0]);
			var mois = Number(date.split("/")[1]);

			console.log("jour : " + jour);
			console.log("mois : " + mois);

			var jourExiste = verifierExistenceJour(jour, mois);

			return jourExiste;
		}
		return false;
	}
	
	else {	
		return false;
	}
}

function verifierExistenceJour(pJour, pMois) {
	/* On commence par tester que le mois est compris entere 1 et 12 */
	var existenceMois = (pMois >= 1) && (pMois <= 12);
	if(existenceMois) {
		/* Février */
		if(pMois == 2) {
			/* On teste si le jour de février est compris entere 0 et 12 */
			var existenceJourFevrier = (pJour > 0) && (pJour <= 29);
			console.log("Existence du " + pJour + "/" + pMois + " : " + existenceJourFevrier);
			return existenceJourFevrier;
		}
		else {
		/* On commence par tester que le mois est compris entere 1 et 12 */
			var existenceJour = (pJour > 0) && (pJour <= 31);
			console.log("Existence du " + pJour + "/" + pMois + " : " + existenceJour);
			return existenceJour;
		}
	}
	else {		
		console.log("Vérifiez votre date !!");
		return false;
	}
}

function getSignFromDate(date) {
	var jour = Number(date.split("/")[0]);
	var mois = Number(date.split("/")[1]);

	if(jour >= 20) {
		return tabSigns[mois - 1];
	}
	else {
		/* On traite le mois de janvier */
		if(mois == 1) {
			return tabSigns[11];
		}

		return tabSigns[(mois - 1) - 1];
	}

	return "NOTRE SIGNE";
}