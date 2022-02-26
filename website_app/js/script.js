console.log("Template du site par: github.com/OLIMINATOR");

function english() {
    console.log('Set lang to english');

    document.querySelector('html').setAttribute('lang', 'en');
    document.querySelectorAll('#description').forEach(e => e.setAttribute('content', 'Resources for Minecraft Launcher'));
    document.querySelector('p').innerHTML = 'Miscellaneous resources needed to run Minecraft are stored here.';
    document.querySelector('.doc').setAttribute('href', 'en_doc.html');
    document.querySelector('.btn2').innerHTML = '<i class="fa-solid fa-user"></i> Author';
    document.querySelector('.btn3').innerHTML = '<i class="fa-solid fa-earth-europe"></i> Français';
    document.querySelector('.btn3').setAttribute('onclick', 'french()');
}

function french() {
    console.log('Langue changé en français');

    document.querySelector('html').setAttribute('lang', 'fr');
    document.querySelectorAll('#description').forEach(e => e.setAttribute('content', 'Ressources pour Launcher Minecraft'));
    document.querySelector('p').innerHTML = 'Des ressources diverses nécessaires au fonctionnement de Minecraft sont stockés ici.';
    document.querySelector('.doc').setAttribute('href', 'fr_doc.html');
    document.querySelector('.btn2').innerHTML = '<i class="fa-solid fa-user"></i> Auteur';
    document.querySelector('.btn3').innerHTML = '<i class="fa-solid fa-earth-americas"></i> English';
    document.querySelector('.btn3').setAttribute('onclick', 'english()');
}