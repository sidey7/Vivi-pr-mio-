let opcaoSelecionada = null;

function selecionarOpcao(botao) {
    // Remove a seleção de outros botões
    document.querySelectorAll(".opcao").forEach(btn => {
        btn.classList.remove("selecionado");
    });

    // Marca a opção selecionada
    botao.classList.add("selecionado");
    opcaoSelecionada = botao.innerText;
}

function confirmarResposta() {
    if (opcaoSelecionada) {
        let premioDiv = document.getElementById("premio");
        let som = document.getElementById("somPremio");

        premioDiv.style.display = "block"; // Exibe a div

        if (som) {
            som.play().catch(error => console.log("Erro ao tocar o som:", error));
        }

        setTimeout(() => {
            premioDiv.style.display = "none"; // Esconde a div após 3 segundos
            // Remova esta linha se o 2index.html não existir
            window.location = "1index.html";
        }, 3000);
    } else {
        alert("Escolha uma opção antes de confirmar!");
    }
}