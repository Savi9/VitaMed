// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("medicoForm"); // Obtém o formulário para cadastro de médicos
    const listaMedicos = document.getElementById("listaMedicos"); // Obtém o elemento para exibir a lista de médicos
    const searchInput = document.getElementById("searchInput"); // Obtém o campo de pesquisa para médicos

    // Inicializa a lista de médicos, buscando dados do localStorage ou utilizando dados fictícios
    let medicos = JSON.parse(localStorage.getItem("medicos")) || [
        { nome: 'Dr. Carlos Mendes', especialidade: 'Cardiologia', crm: '123456-SP' },
        { nome: 'Dr. Fernanda Souza', especialidade: 'Dermatologia', crm: '234567-RJ' },
        { nome: 'Dr. Ricardo Lima', especialidade: 'Ortopedia', crm: '345678-MG' },
        { nome: 'Dr. Ana Beatriz', especialidade: 'Pediatria', crm: '456789-BA' },
        { nome: 'Dr. João Martins', especialidade: 'Oftalmologia', crm: '567890-PR' },
        { nome: 'Dr. Larissa Alves', especialidade: 'Ginecologia', crm: '678901-RS' },
        { nome: 'Dr. Roberto Farias', especialidade: 'Neurologia', crm: '789012-CE' },
        { nome: 'Dr. Camila Borges', especialidade: 'Psiquiatria', crm: '890123-PE' },
        { nome: 'Dr. Pedro Henrique', especialidade: 'Endocrinologia', crm: '901234-SC' },
        { nome: 'Dr. Vanessa Costa', especialidade: 'Urologia', crm: '012345-DF' }
    ];

    // Função para salvar a lista de médicos no localStorage
    function salvarMedicos() {
        localStorage.setItem("medicos", JSON.stringify(medicos));
    }

    // Função para exibir todos os médicos na tela
    function exibirMedicos() {
        listaMedicos.innerHTML = ""; // Limpa a lista de médicos exibida
        medicos.forEach((medico, index) => {
            // Adiciona cada médico à lista com botões para editar ou deletar
            listaMedicos.innerHTML += `
                <div class="medico-card">
                    <p><strong>Nome:</strong> ${medico.nome}</p>
                    <p><strong>Especialidade:</strong> ${medico.especialidade}</p>
                    <p><strong>CRM:</strong> ${medico.crm}</p>
                    <button onclick="editarMedico(${index})">Atualizar</button>
                    <button onclick="deletarMedico(${index})">Deletar</button>
                </div>
            `;
        });
    }

    // Evento de submit para adicionar um novo médico
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o envio real do formulário

        // Cria um novo objeto médico com os dados do formulário
        const novoMedico = {
            nome: document.getElementById("nome").value,
            especialidade: document.getElementById("especialidade").value,
            crm: document.getElementById("crm").value,
        };

        // Adiciona o novo médico à lista e salva no localStorage
        medicos.push(novoMedico);
        salvarMedicos();
        exibirMedicos(); // Atualiza a exibição da lista de médicos
        form.reset(); // Reseta o formulário
    });

    // Função para editar os dados de um médico
    window.editarMedico = (index) => {
        const medico = medicos[index]; // Obtém o médico que será editado
        const novoNome = prompt("Novo nome:", medico.nome); // Solicita o novo nome
        const novaEspecialidade = prompt("Nova Especialidade:", medico.especialidade); // Solicita nova especialidade
        const novoCrm = prompt("Novo CRM:", medico.crm); // Solicita novo CRM

        // Atualiza os dados do médico se todos os campos forem preenchidos
        if (novoNome && novaEspecialidade && novoCrm) {
            medicos[index] = { nome: novoNome, especialidade: novaEspecialidade, crm: novoCrm };
            salvarMedicos();
            exibirMedicos(); // Atualiza a exibição da lista
        }
    };

    // Função para deletar um médico
    window.deletarMedico = (index) => {
        // Confirma se o usuário tem certeza de que deseja excluir o médico
        if (confirm("Tem certeza que deseja excluir este médico?")) {
            medicos.splice(index, 1); // Remove o médico da lista
            salvarMedicos(); // Salva a lista atualizada no localStorage
            exibirMedicos(); // Atualiza a exibição da lista
        }
    };

    // Função para realizar a busca de médicos ao digitar no campo de pesquisa
    searchInput.addEventListener("keyup", () => {
        const termoBusca = searchInput.value.toLowerCase(); // Obtém o termo de busca

        // Exibe ou esconde a lista de médicos conforme a presença de termos de busca
        if (termoBusca) {
            listaMedicos.style.display = "block";  // Torna a lista visível quando houver busca
        } else {
            listaMedicos.style.display = "none";  // Esconde a lista se não houver busca
        }

        listaMedicos.innerHTML = "";  // Limpa a lista antes de exibir os resultados

        // Filtra médicos pela busca no nome e exibe os resultados
        medicos.filter(medico => medico.nome.toLowerCase().includes(termoBusca))
            .forEach((medico, index) => {
                listaMedicos.innerHTML += `
                    <div class="medico-card">
                        <p><strong>Nome:</strong> ${medico.nome}</p>
                        <p><strong>Especialidade:</strong> ${medico.especialidade}</p>
                        <p><strong>CRM:</strong> ${medico.crm}</p>
                        <button onclick="editarMedico(${index})">Atualizar</button>
                        <button onclick="deletarMedico(${index})">Deletar</button>
                    </div>
                `;
            });
    });

    // Oculta a lista de médicos ao carregar a página, até que o usuário inicie a busca
    listaMedicos.style.display = "none";

    // Exibe a lista de médicos ao carregar a página
    exibirMedicos();
});
