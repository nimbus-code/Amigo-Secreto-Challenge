//Lista para agregar nombres
let amigos = [];

//Validar las entradas de texto
function agregarAmigo() {
    let nuevoamigo = document.getElementById('amigo').value;

    //agrega el nuevo nombre a la lista de amigos
    if (nuevoamigo && nuevoamigo.trim() !== '') {
        amigos.push(nuevoamigo);
        mostrarAmigos();
        document.getElementById('amigo').value = '';
        console.log(amigos);
    } else {
        alert("Por favor, digite un nombre");
    }
};

//Visualizar lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sortear aleatoriamente un nombre
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agregue al menos dos amigos para sortear");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    alert("El amigo sorteado es: " + amigoSorteado);
}

//Boton reinicio de lista
function reiniciarLista() {
    amigos = [];
    mostrarAmigos();
}