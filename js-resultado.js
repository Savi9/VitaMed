// Função de busca e exibição do resultado
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do envio do formulário (recarregar a página)

    // Obtém o nome do paciente inserido pelo usuário e remove espaços extras
    const nomePaciente = document.getElementById('nome-paciente').value.trim();

    // Se o campo de nome do paciente estiver vazio, exibe um alerta
    if (nomePaciente === "") {
        alert("Por favor, digite o nome do paciente.");
        return; // Interrompe a execução do código caso o nome não tenha sido preenchido
    }

    // Simulação de uma busca. Aqui você poderia conectar a um banco de dados
    // ou API para buscar as informações reais.
    if (nomePaciente.toLowerCase() === "joão silva") {
        // Se o nome do paciente for "João Silva", exibe o resultado do exame
        document.getElementById('resultado').style.display = "block"; // Torna o resultado visível
        document.getElementById('paciente-nome').textContent = nomePaciente; // Exibe o nome do paciente no campo correspondente
    } else {
        // Se o paciente não for encontrado, exibe um alerta
        alert("Paciente não encontrado. Tente novamente.");
    }
});
