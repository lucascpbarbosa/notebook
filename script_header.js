function mudou(){
    if (window.innerWidth >= '604'){
        menu_hamburguer.style.display = 'none';
    }
    else{
        menu_hamburguer.style.display = 'none'
    }
}
function abrirNav(){
    var menu = document.getElementById('menu_hamburguer')

    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';

    }
}

function abrirPesquisa(){
    if (div_pesquisa.style.display == 'block'){
        div_pesquisa.style.display = 'none'
    }
    else{
        div_pesquisa.style.display = 'block';
    }
}
