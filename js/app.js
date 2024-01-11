function comprar () {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtdTipo = document.getElementById(`qtd-${tipo}`).innerHTML;
    let qtdCompra = document.getElementById("qtd").value == 0 ? 1 : document.getElementById("qtd").value;

    if (qtdTipo - qtdCompra >= 0 && qtdCompra > 0) {
        alert("Compra realizada com sucesso")
        qtdTipo = qtdTipo - qtdCompra
        document.getElementById(`qtd-${tipo}`).innerHTML = qtdTipo; 
    } else if (qtdCompra < 0) {
        alert("Quantidade Inválida")
    } else {
        alert(`Quantidade indisponível para tipo ${tipo}`)
    }
}