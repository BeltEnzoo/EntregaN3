//Traigo los elementos desde el HTML

const form = document.getElementById('searchForm');
const card = document.getElementById('resultContainer');
const inputID = document.getElementById('pizzaId');

//capturar el id ingresado

const numInput = (e) => {
    e.preventDefault();
    const pizzaId = inputID.value.trim();
    resultContainer.innerHTML = ''; // Limpiar contenido previo(card) 
}

//Mensaje de error:

const txtError = (mensaje) {
    resultContainer.innerHTML = '<p class = "error">${mensaje}</p>';
}

const init = () => {
    form.addEventListener('click', numInput)
}

init()