const menu = document.getElementById('menu_hamburguer')
const sombra_menu = document.querySelector('.sombra_menu_hamburguer')
const div_pesquisa = document.querySelector('#div_pesquisa')

function mudou(){
    if (window.innerWidth >= '604'){
        menu_hamburguer.style.display = 'none';
    }
    else{
        menu_hamburguer.style.display = 'none'
    }
}
function abrirNav(){
    

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

    if (div_pesquisa.style.display == 'none'){
        if(menu.style.display == 'inline-block' & sombra_menu.style.display == 'inline-block'){
            div_pesquisa.style.display = 'inline-block'
            div_pesquisa.style.width = '70%'
        }

        else{
            div_pesquisa.style.display = 'inline-block'
        }
    }
    else{
        div_pesquisa.style.display = 'inline-block';
    }
}
