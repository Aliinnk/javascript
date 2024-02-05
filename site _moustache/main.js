function toggleMenu() {
    var menu = document.getElementById("menu"); //je vais chercher les elem dans ma liste de liens
    menu.classList.toggle("show"); //j'active la classe show
};

let form = document.querySelector("#my-form"); // 
let prenom = document.querySelector("#prenom"); // je vais chercher le prenom
let nom = document.querySelector("#nom"); // le nom
let pays = document.querySelector("#pays"); // le pays
let errors = document.querySelector("#errors"); //s'il y a des erreurs
let body = document.querySelector("body"); // mon body
let ville = document.querySelector ("#ville"); // la ville
let codePostal = document.querySelector("#codePostal"); //le code postal
let adresse = document.querySelector("#adresse"); //et l'adresse

function submitForm(event) { //je fais une boucle qui va verifier si tout est bien
    //remplis 
    event.preventDefault();

    // je reinitialise mon message d'erreur
    errors.innerHTML = "";

    // Vérifier le prénom
    if (prenom.value.length < 2) {
        prenom.style.backgroundColor = "red"; //si le prenom fait moins de deux charactères
        //alors j'affiche la case de remplissage en rouge
        errors.innerHTML += "<p>Le prénom doit avoir au moins 2 caractères.</p>";
    }
    //sinon, en vert. Et je fais comme ca pour tous les autres
    else {prenom.style.backgroundColor = "green";}

    // Vérifier le nom
    if (nom.value.length < 2) {
        nom.style.backgroundColor = "red";
        errors.innerHTML += "<p>Le nom doit avoir au moins 2 caractères.</p>";
    }
    else {nom.style.backgroundColor = "green";}

    // Vérifier la ville
    if (ville.value.length < 2) {
        ville.style.backgroundColor = "red";
        errors.innerHTML += "<p>La ville doit avoir au moins 2 caractères.</p>";
    }
    else {ville.style.backgroundColor = "green";}

    // Vérifier le code postal
    if (codePostal.value.length < 5 || codePostal.value.length > 5) { //je regarde que le code
        //postale fait exactement 5 chiffres
        codePostal.style.backgroundColor = "red";
        errors.innerHTML += "<p>Le code postal doit avoir exactement 5 caractères.</p>";
    }
    else {codePostal.style.backgroundColor = "green";}

    // Vérifier l'adresse
    if (adresse.value.length < 2) {
        adresse.style.backgroundColor = "red";
        errors.innerHTML += "<p>L'adresse doit avoir au moins 2 caractères.</p>";
    }
    else {adresse.style.backgroundColor = "green";}

    // Vérifier le pays
    if (pays.value === "") { //je vérifie juste que le pays à été sélectionné
        pays.style.backgroundColor = "red";
        errors.innerHTML += "<p>Veuillez sélectionner un pays.</p>";
    }
    else {pays.style.backgroundColor = "green";}

    if (errors.innerHTML !== "") { //s'il y a des erreurs je les affiches
        errors.style.display = "block";
    } else {
        //sinon j'affiche un message de confirmation et j'efface tout ce qui a été écrit
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('confirmation-message').style.display = 'block';
    }
}