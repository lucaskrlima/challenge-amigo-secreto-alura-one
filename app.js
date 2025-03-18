//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Variável do tipo array, que armazena os nomes dos amigos inseridos.
let amigos = []; 

//Função que permita ao usuário inserir um nome no campo de texto 
function adicionarAmigo(){
    const inputAmigo = document.getElementById("amigo"); 
    let nome = inputAmigo.value.trim();

//Validação que garante que o campo não esteje vazio
//Se estiver vazio exibe uma mensagem de erro

    if(amigos.includes(nome)){
        alert("Este nome já existe na lista! Por favor, insira outro nome!"); 
        return; 
    }
    if(nome === "" || !isNaN(nome)){
        alert("Campo Vazio! Por favor, insira o nome de um amigo! ") 
        return;     
    }

    //Atualiza o array de amigos pelo método push
    amigos.push(nome); 
    inputAmigo.value = "";   
    console.log(amigos); 
    inputAmigo.focus();  
    atualizarLista();

}   

//Função que percorra o array amigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML.
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; //garante que não haja nomes duplicados ao atualizar

    amigos.forEach((amigo, index) => { 
        const item = document.createElement('li');
        item.textContent = amigo + " ";

        //botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "❌"; 
        botaoRemover.style.marginLeft = "10px"; 
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index);

   
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    }); 
} 

//Remove um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); 
    atualizarLista(); 
}


//Função que selecione aleatoriamente um dos nomes armazenados no array amigos.
function sortearAmigo(){
    if(amigos.length === 0){
        alert("Adicione um amigo antes de sortear!"); 
        return; 
    } if(amigos.length < 3){
        alert("Adicione pelo menos 3 amigos para sortear!"); 
        return; 
    }
    const amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)]; //Gera um índice aleatório do array
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML =  `<li>🎉 O amigo secreto sorteado é: ${amigoSorteado}! 🎁</li>`;

    
//função para limpar lista
    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
    amigos = [];
}   