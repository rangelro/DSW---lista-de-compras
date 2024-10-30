function apertaEnter(event){
    if(event.key === 'Enter'){
        adicionarItem();
    }
}


function adicionarItem(){
    const novoItem = document.getElementById("item");
    const minhaLista = document.getElementById("lista");

    const valorItem = novoItem.value.trim();

    if(valorItem !== ''){
        const listaItem = document.createElement("li");
        listaItem.textContent = valorItem;

        minhaLista.appendChild(listaItem);
    }else{
        alert("Digite um item valido");
        return;
    }

    novoItem.value='';
    

}