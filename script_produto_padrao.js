let titulo = document.querySelector('.nome')
let produto_nome = document.querySelector('.nome_produto').textContent
titulo.innerHTML = `${produto_nome}`
let quantidade = document.querySelector('#quantidade')


function mais_um(){
    quantidade.value = Number(quantidade.value) + 1
   

  
}

var cont = 0 
function adicionar_no_carrinho(){
    // Variaveis para a div carrinho 
    let carrinho = document.querySelector('.carrinho_novo')
    let produto_imagem = document.querySelector('#imagem_do_produto').src
    let valor = document.querySelector('.valor').textContent
    let quantidade = document.querySelector('#quantidade').value
    let div_produto = document.createElement('div')
    let produto = document.createElement('img')
    let produto_valor = document.createElement('p')
    let produto_quantidade = document.createElement('p')
    

    // Adicionando a imagem do produto ao carrinho 
    produto.src = produto_imagem
    produto_valor.innerHTML = valor
    produto_quantidade.innerHTML = quantidade

    // Testando se aquele produto já está no carrinho
    if(cont < 1){
        carrinho.appendChild(div_produto)
        div_produto.appendChild(produto)
        div_produto.appendChild(produto_quantidade)
        div_produto.appendChild(produto_valor)
        cont++
        
         // Mostrando a div
        carrinho.style.display = 'flex'
    }
    else{
        window.alert('Esse produto já está no carrinho!')
    }


    // Div desaparecer 
    setTimeout(sumir, 3000)
    function sumir(){
        carrinho.style.display = 'none'
    }
}

