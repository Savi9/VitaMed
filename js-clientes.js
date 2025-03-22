// Espera o carregamento completo do documento
document.addEventListener("DOMContentLoaded", () => {
    // Obtém os elementos necessários do DOM
    const form = document.getElementById("clienteForm");
    const listaClientes = document.getElementById("listaClientes");

    // Recupera a lista de clientes do localStorage ou inicializa como um array vazio
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Função para salvar a lista de clientes no localStorage
    function salvarClientes() {
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    // Função para exibir os clientes na tela
    function exibirClientes() {
        listaClientes.innerHTML = ""; // Limpa a lista antes de exibir novamente
        clientes.forEach((cliente, index) => {
            // Adiciona cada cliente à lista com os botões de editar e deletar
            listaClientes.innerHTML += `
                <div class="cliente-card">
                    <p><strong>Nome:</strong> ${cliente.nome}</p>
                    <p><strong>CPF:</strong> ${cliente.cpf}</p>
                    <p><strong>Data de Nascimento:</strong> ${cliente.dataNascimento}</p>
                    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
                    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
                    <button onclick="editarCliente(${index})">Atualizar</button>
                    <button onclick="deletarCliente(${index})">Deletar</button>
                </div>
            `;
        });
    }

    // Event listener para o formulário de cadastro de cliente
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Cria um novo objeto cliente com os dados do formulário
        const novoCliente = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            dataNascimento: document.getElementById("dataNascimento").value,
            endereco: document.getElementById("endereco").value,
            telefone: document.getElementById("telefone").value,
        };

        // Adiciona o novo cliente à lista e atualiza o localStorage
        clientes.push(novoCliente);
        salvarClientes();
        exibirClientes(); // Atualiza a exibição da lista de clientes
        form.reset(); // Reseta os campos do formulário
    });

    // Função para editar um cliente
    window.editarCliente = (index) => {
        const cliente = clientes[index]; // Obtém o cliente a ser editado
        // Solicita as novas informações através de prompts
        const novoNome = prompt("Novo nome:", cliente.nome);
        const novoCpf = prompt("Novo CPF:", cliente.cpf);
        const novaData = prompt("Nova Data de Nascimento:", cliente.dataNascimento);
        const novoEndereco = prompt("Novo Endereço:", cliente.endereco);
        const novoTelefone = prompt("Novo Telefone:", cliente.telefone);

        // Verifica se todas as informações foram fornecidas e atualiza o cliente
        if (novoNome && novoCpf && novaData && novoEndereco && novoTelefone) {
            clientes[index] = {
                nome: novoNome,
                cpf: novoCpf,
                dataNascimento: novaData,
                endereco: novoEndereco,
                telefone: novoTelefone,
            };
            salvarClientes();
            exibirClientes(); // Atualiza a exibição dos clientes
        }
    };

    // Função para deletar um cliente
    window.deletarCliente = (index) => {
        if (confirm("Tem certeza que deseja excluir este cliente?")) {
            clientes.splice(index, 1); // Remove o cliente da lista
            salvarClientes();
            exibirClientes(); // Atualiza a exibição dos clientes
        }
    };

    // Exibe a lista de clientes inicialmente
    exibirClientes();
});
