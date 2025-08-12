// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio/final

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);

    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // para limpiar la lista anterior

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, añade al menos un amigo para hacer el sorteo.");
        return;
    }

    // para seleccionar un amigo al azar
    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indexAleatorio];

    // Mostrar el resultado 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}