function mudou(){
    if (window.innerWidth >= '604'){
        menu_hamburguer.style.display = 'none';
    }
    else{
        menu_hamburguer.style.display = 'none'
    }
}
function abrirNav(){
    let menu = document.getElementById('menu_hamburguer')
    let sombra_menu = document.querySelector('.sombra_menu_hamburguer')

    if (menu.style.display == 'inline-block' & sombra_menu.style.display == 'inline-block'){
        menu.style.display = 'none';
        sombra_menu.style.display = 'none'
    }
    else {
        menu.style.display = 'inline-block';
        sombra_menu.style.display = 'inline-block'

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
