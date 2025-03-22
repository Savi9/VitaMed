// Função que exibe o formulário dependendo do tipo de ação (marcar, retornar, atualizar, deletar)
function showForm(formType) {
    const conteudo = document.getElementById('conteudo'); // Obtém o elemento onde o formulário será exibido
    let formHTML = ''; // Variável para armazenar o HTML do formulário

    // Verifica o tipo de formulário e define o HTML correspondente
    if (formType === 'marcar') {
        formHTML = `
            <form id="form-marcar">
                <label>Nome Completo do Paciente:</label>
                <input type="text" placeholder="Digite o nome" required>
                <label>Data:</label>
                <input type="date" required>
                <label>Horário:</label>
                <input type="time" required>
                <label>Especialidade Médica:</label>
                <input type="text" placeholder="Digite a especialidade médica" required>
                <label>Tipo do Atendimento:</label>
                <input type="text" placeholder="Consulta, Exame, etc" required>
                <button type="submit">Marcar</button>
            </form>
        `;
    } else if (formType === 'retornar') {
        formHTML = `
            <form id="form-retornar">
                <label>Número do Prontuário:</label>
                <input type="text" placeholder="Digite o número do prontuário" required>
                <button type="submit">Buscar</button>
            </form>
        `;
    } else if (formType === 'atualizar') {
        formHTML = `
            <form id="form-atualizar">
                <label>Número do Prontuário:</label>
                <input type="text" placeholder="Digite o número do prontuário" required>
                <button type="submit">Atualizar</button>
            </form>
        `;
    } else if (formType === 'deletar') {
        formHTML = `
            <form id="form-deletar">
                <label>Número do Prontuário:</label>
                <input type="text" placeholder="Digite o número do prontuário" required>
                <button type="submit">Deletar</button>
            </form>
        `;
    } else {
        // Caso o tipo de formulário não seja um dos definidos, exibe uma mensagem informando que o formulário ainda não foi implementado
        formHTML = `<p>Formulário para ${formType} ainda não foi implementado.</p>`;
    }

    // Insere o HTML do formulário na página
    conteudo.innerHTML = formHTML;

    // Adiciona o comportamento de submit para cada tipo de formulário
    if (formType === 'marcar') {
        const form = document.getElementById('form-marcar');
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio real do formulário
            conteudo.innerHTML = "<p>Consulta marcada com sucesso!</p>"; // Exibe mensagem de sucesso
        });
    } else if (formType === 'retornar') {
        const form = document.getElementById('form-retornar');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            conteudo.innerHTML = "<p>Retorno marcado com sucesso!</p>"; // Exibe mensagem de sucesso
        });
    } else if (formType === 'atualizar') {
        const form = document.getElementById('form-atualizar');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            conteudo.innerHTML = "<p>Atualizado com sucesso!</p>"; // Exibe mensagem de sucesso
        });
    } else if (formType === 'deletar') {
        const form = document.getElementById('form-deletar');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            conteudo.innerHTML = "<p>Apagado com sucesso!</p>"; // Exibe mensagem de sucesso
        });
    }
}
