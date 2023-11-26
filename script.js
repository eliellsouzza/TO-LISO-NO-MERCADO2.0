
function adicionarProduto() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value, 10);
    const preco = parseFloat(document.getElementById("preco").value);

    if (produto.trim() !== "" && !isNaN(quantidade) && !isNaN(preco)) {
        const tabelaProdutos = document.querySelector("#tabela-produtos");
        const newRow = tabelaProdutos.insertRow();
        newRow.className = "produto";
        
        const cellNome = newRow.insertCell(0);
        const cellQuantidade = newRow.insertCell(1);
        const cellPreco = newRow.insertCell(2);
        const cellAcoes = newRow.insertCell(3);

        cellNome.textContent = produto;
        cellQuantidade.innerHTML = `<input type="number" value="${quantidade}" onchange="atualizarTotalGeral()">`;
        cellPreco.textContent = preco.toFixed(2);
        cellAcoes.innerHTML = `
            <button class="editar-edit" onclick="editarProduto(this)">Editar</button>
            <button class="excluir-edit" onclick="excluirProduto(this)">Excluir</button>
        `;
        
        atualizarTotalGeral();
    }

    // Limpar campos após adicionar produto
    document.getElementById("produto").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

function editarProduto(button) {
    const row = button.parentNode.parentNode;
    const nome = row.cells[0].textContent;
    const quantidade = parseInt(row.cells[1].querySelector("input").value, 10);
    const preco = parseFloat(row.cells[2].textContent);

    document.getElementById("produto").value = nome;
    document.getElementById("quantidade").value = quantidade;
    document.getElementById("preco").value = preco.toFixed(2);

    // Remover a linha da tabela após editar
    row.parentNode.removeChild(row);

    atualizarTotalGeral();
}

function excluirProduto(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    atualizarTotalGeral();
}

function atualizarTotalGeral() {
    let totalGeral = 0;
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        const quantidade = parseInt(produto.cells[1].querySelector("input").value, 10);
        const preco = parseFloat(produto.cells[2].textContent);
        totalGeral += quantidade * preco;
    });

    document.getElementById("total-valor").textContent = totalGeral.toFixed(2);
}




function exibirPopup() {
const overlay = document.getElementById("overlay");
overlay.style.display = "block";
}

function fecharPopup() {
const overlay = document.getElementById("overlay");
overlay.style.display = "none";
}

function exibirBoasVindas() {
const nomeInput = document.getElementById("input-nome").value;
const nomeUsuario = document.getElementById("nome-usuario");

if (nomeInput.trim() !== "") {
    nomeUsuario.textContent = nomeInput;
    fecharPopup();
}
}

// Exibe o popup ao carregar a página
window.onload = function () {
exibirPopup();
};