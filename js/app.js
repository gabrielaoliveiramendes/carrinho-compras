//Cada vez que o botão adicionar é clicado, o produto é adicinado no carrinho. A variável que acumula os valores deve ser criada fora da função adicionar, para que cada vez que um produto é adicionado, a variável não seja reiniciada, e não fique com o valor "0" (valor inicial), quando o botão for clicado
//Variável que acumula os valores dos produtos adicionados no carrinho
let totalGeral;
limpar();


function adicionar(){
//recuperar nome, quantidade e valor do produto
    let produto = document.getElementById("produto").value; 
    //produto = "Celular - R$1400" (<option value="Celular - R$1400">Celular - R$1400</option>)
    let nomeProduto = produto.split("-")[0];
    //nomeproduto = [Celular, R$1400]
    let valorUnitario = produto.split("R$")[1];
    //valorUnitario = [Celular -, 1400]
    let quantidade = document.getElementById("quantidade").value;
    //quantidade inserida pelo usuário no <input/>
    
//calcular o preço (subtotal)
    let preco = valorUnitario * quantidade;

//adicionar no carrinho
/* cada item no carrinho é:
<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>
    </section>
</section>
*/
//Para cada item novo adicionado no carrinho, criar uma nova section
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    //"carrinho.innerHTML +" incrementa o novo produto no carrinho, ao invés de substituir

//valor total da compra
    //cada momento que adicionar um produto no carrinho (preco), ele é somando no total geral
    totalGeral = totalGeral + preco;
    //adicionar a soma do totalGeral no campo HTML do total
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`

//limpar o campo quantidade após adicionar um item no carrinho
document.getElementById("quantidade").value = 0;

}


// Função limpar carrinho *finalizada*
function limpar(){
    totalGeral = 0;
    //valor inicial da variável totalGeral
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").innerHTML = " ";
}