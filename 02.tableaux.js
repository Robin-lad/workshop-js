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

var villesMajusculeSeTerminantParS = villes.filter(v => v.endsWith("s")).map(v => v.toUpperCase());
l(villesMajusculeSeTerminantParS);