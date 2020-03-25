
console.log(document.forms["formulaire"]);
console.log(document.forms["formulaire"]["email"]);

document.forms["formulaire"].addEventListener("submit", 
	function(evt){
		
		var erreur; 
		var succes;
		
		var submit_inputs = this;
		
		if(submit_inputs["email"].value != "v@tutanota.com")
			erreur = "Oups ! Vous n'êtes pas autorisé<br>"+
					 "Seuls les adresses des adhérents sont valides !";
						
		if (erreur) {
			evt.preventDefault();
			document.getElementById("erreur").innerHTML = erreur;
			return false;
		} else {
			succes = "pas d'erreur, formulaire valide";
			document.getElementById("succes").innerHTML = succes;
			alert("Formulaire validé !!  "+
				  "Le message n'a pas été transmis  "+
				  "Veuillez consulter mon CV pour obtenir mon adresse mail");			
			return true;
		}
	}
);
