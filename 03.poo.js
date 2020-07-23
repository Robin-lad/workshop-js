var l = console.log;
l("03 - POO");

function Personne(n, pr, ps){

    this.nom = n;
    this.prenom = pr;
    this.pseudo = ps;

    this.getNomComplet = function(){
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");
l(jules.nom);
l(jules.prenom);
l(jules.pseudo);
l(jules.getNomComplet());

function afficherPersonne(p){
    l(p.nom);
    l(p.prenom);
    l(p.pseudo);
    l(p.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
l(jules.getNomComplet());

l(jules.age);
Personne.prototype.age = "NON DEFINI";
l(jules.age);
jules.age = 30;
l(jules.age);

Personne.prototype.getInitiales = function(){
    var a = this.prenom.charAt(0);
    var b = this.nom.charAt(0);
    return a+b;
}

l(jules.getInitiales());

var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet : function(){
        return this.nom + " " + this.prenom + " " + this.pseudo;
    } 
};

afficherPersonne(robert);

function Client(n, pr, ps, nc){
    Personne.call(this, n, pr, ps);

    this.numClient = nc;

    this.getInfos = function(){
        return this.numClient + " " + this.nom + " " + this.prenom;
    }
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne.call(this, steve);
l(steve.numClient);
l(steve.getInfos());