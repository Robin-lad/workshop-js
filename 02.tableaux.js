var l = console.log;
l("02 - Tableaux");

var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(element => {
    l(element);
});

var a = villes.every(v => v.includes('a'));
l(a);

var b = villes.some(v => v.includes('-'));
l(b);

function tiretOuEspace(e){
    return (!(e.includes(' ')) && !(e.includes('-')));
}
var villesSansTiretSansEspace = villes.filter(tiretOuEspace);

l(villesSansTiretSansEspace);

function termineS(e){
    return (e.substring(e.length-1) == 's');

}

var villesMajusculeSeTerminantParS = villes.filter(termineS).map(v => v.toUpperCase());
l(villesMajusculeSeTerminantParS);