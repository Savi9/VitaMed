// Adiciona um ouvinte de evento ao formulário de busca para capturar o envio
document.getElementById('form-busca').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do envio do formulário (recarregar a página)

    // Obtém o número do prontuário que foi digitado pelo usuário
    const numeroProntuario = document.getElementById('numero-prontuario').value;

    // Obtém os elementos da interface onde as informações do prontuário serão exibidas
    const prontuarioInfo = document.getElementById('prontuario-info');
    const tituloResultado = document.querySelector('.resultado-prontuario h2');

    // Simulando uma base de dados com alguns prontuários
    const prontuarios = {
        "12345": {
            nome: "João Silva",
            idade: 45,
            diagnostico: "Hipertensão",
            data: "12/02/2025"
        },
        "67890": {
            nome: "Maria Souza",
            idade: 34,
            diagnostico: "Diabetes",
            data: "05/03/2025"
        }
    };

    // Verifica se o número do prontuário existe na base de dados simulada
    if (prontuarios[numeroProntuario]) {
        // Se o prontuário for encontrado, pega os dados correspondentes
        const prontuario = prontuarios[numeroProntuario];

        // Exibe o título "Prontuário Encontrado"
        tituloResultado.innerText = 'Prontuário Encontrado';
        
        // Exibe as informações detalhadas do prontuário
        prontuarioInfo.innerHTML = `
            <strong>Nome:</strong> ${prontuario.nome} <br>
            <strong>Idade:</strong> ${prontuario.idade} anos <br>
            <strong>Diagnóstico:</strong> ${prontuario.diagnostico} <br>
            <strong>Data de Emissão:</strong> ${prontuario.data} <br>
        `;
    } else {
        // Caso o prontuário não seja encontrado, exibe uma mensagem de erro
        tituloResultado.innerText = 'Prontuário Não Encontrado';
        prontuarioInfo.innerHTML = `<p>Prontuário não encontrado. Verifique o número e tente novamente.</p>`;
    }
});
