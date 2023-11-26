const btn = document.querySelector("#send");

// Adiciona um evento de clique ao botão
btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Captura os valores dos inputs
    const name = document.querySelector("#name").value;
    const qtd = document.querySelector("#qtd").value;
    const preco = document.querySelector("#preco").value;

    // Limpa os inputs
    document.querySelector("#name").value = '';
    document.querySelector("#qtd").value = '';
    document.querySelector("#preco").value = '';

    // Adiciona os valores à lista de produtos (usando uma <ul>)
    const listaProdutos = document.querySelector("#lista-produtos");
    const listItem = document.createElement("li");
    listItem.innerHTML = `Nome: ${name}, Quantidade: ${qtd}, Preço: ${preco} <button class="btn-excluir" onclick="excluirItemLista(this)">Excluir</button>`;
    listaProdutos.appendChild(listItem);

    // Adiciona os valores à tabela de produtos (usando uma <tbody>)
    const tabelaProdutos = document.querySelector("#tabela-produtos");
    const newRow = tabelaProdutos.insertRow();
    const cellNome = newRow.insertCell(0);
    const cellQuantidade = newRow.insertCell(1);
    const cellPreco = newRow.insertCell(2);
    const cellAcoes = newRow.insertCell(3);

   /*  cellNome.textContent = name;
    cellQuantidade.textContent = qtd;
    cellPreco.textContent = preco;
    cellAcoes.innerHTML = `<button class="btn-excluir" onclick="excluirItemTabela(this)">Excluir</button>`;
 */
    // Atualiza o total geral
    atualizarTotalGeral();
});

function atualizarTotalGeral() {
    let totalGeral = 0;

    // Percorre os itens da lista ou da tabela e calcula o total
    const listaItens = document.querySelectorAll("#lista-produtos li");
    listaItens.forEach(item => {
        // Correção na expressão regular para extrair o valor do preço
        const precoMatch = item.textContent.match(/Preço: ([\d.]+)/);
        if (precoMatch) {
            const preco = parseFloat(precoMatch[1]);
            totalGeral += preco;
        }
    });

    // Atualiza o total geral na página
    document.getElementById("total-valor").textContent = totalGeral.toFixed(2);
}

function excluirItemLista(button) {
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
    atualizarTotalGeral();
}

function excluirItemTabela(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    atualizarTotalGeral();
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



