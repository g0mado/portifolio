
// Selecionar elementos do DOM
const form = document.getElementById('itemForm'); // O formulário
const input = document.getElementById('itemInput'); // Campo de texto
const itemList = document.getElementById('itemList'); // Lista de itens

// Adicionar evento de envio ao formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar o recarregamento da página

    // Obter o valor do campo de entrada
    const itemName = input.value.trim(); // Remove espaços extras

    // Verificar se o campo está vazio
    if (itemName === '') {
        alert('Por favor, digite o nome do item!');
        return;
    }

    // Criar um novo item na lista
    const li = document.createElement('li');
    li.textContent = itemName;

    // Criar botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function () {
        itemList.removeChild(li); // Remove o item da lista
    });

    // Adicionar o botão ao item e o item à lista
    li.appendChild(deleteButton);
    itemList.appendChild(li);

    // Exibir mensagem de confirmação
    alert(`Item "${itemName}" adicionado com sucesso!`);

    // Rolar para o final da lista
    li.scrollIntoView({ behavior: 'smooth' });

    // Limpar o campo de entrada
    input.value = '';
});

