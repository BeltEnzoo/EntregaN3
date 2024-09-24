const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// EMPIEZA LA RESOLUCION DEL EJERCICIO

//Traigo los elementos del documento

const searchForm = document.getElementById('searchForm');
const resultContainer = document.getElementById('resultContainer')
const pizzaId = document.getElementById('pizzaId');

//Funcion para buscar pizza

const leerID = (e) => {
  e.preventDefault();

  const IdIngresado = pizzaId.value;
  resultContainer.innerHTML = ''

  //Validar que el numero este entre cero y diez

  if((IdIngresado > 10)) {
    resultContainer.innerHTML = '<p>Ingresa un num entre 0 y 10</p>'
    resultContainer.classList.add("error")
    return;
  }if((IdIngresado < 0)) {
    resultContainer.innerHTML = '<p>Ingresa un num entre 0 y 10</p>'
    resultContainer.classList.add("error")
    return; 
  }

  //Comparar el id ingresado con el id de las pizza

  const pizza = pizzas.find(p => p.id == IdIngresado);

  //si pizza existe, entonces modifico el html o muestro mensaje de error

  if (pizza) {
    const pizzaCard = `
            <div class="card">
                <h2>${pizza.nombre}</h2>
                <img src="${pizza.imagen}" alt="${pizza.nombre}">
                <p>Precio: $${pizza.precio}</p>
            </div>
        `;
      resultContainer.innerHTML = pizzaCard;
  } else {
    resultContainer.innerHTML = '<p>No se encontró una pizza con ese ID.</p>';
    resultContainer.classList.add('error')
  }


}


//Funcion para inicializar
const init = () => {
  searchForm.addEventListener('submit', leerID);  
}

init();