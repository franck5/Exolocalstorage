

function charger(){
	var Valeur = localStorage.getItem("Saisie")
	$("#Recup").val(Valeur);

}



function save() {
	var Saisie = $("#Saisie").val();
	localStorage.setItem('Saisie', Saisie);
	location.reload();
}



$( document ).ready(function() {

	charger();

	

	$("#button").click(function() {
		save();
	})





})