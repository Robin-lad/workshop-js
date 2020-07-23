var l = console.log;
l("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat = additionner(nombre1, nombre2);

l(resultat);

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
l(resultat2);

var multiplication = function (v1, v2) {
    return v1 * v2;
}

var resultat3 = multiplication(nombre1, nombre2);

l(resultat3);

var afficherOperation = function (nomOperation, operation, nb1, nb2) {
    l(nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1,nb2));
}

afficherOperation("Somme", somme, 20,40);
afficherOperation("Multiplication", multiplication, 10,20);
afficherOperation("Soustraction", function(nb1,nb2) { return nb1 - nb2}, 15,5);