const menuItens = [
  { nome: "Quesadillas", tipo: "principal", imagem: "Comidas/Quesadillas.jpg", preco: "R$ 22,00" },
  { nome: "Burritos", tipo: "principal", imagem: "Comidas/Borritos.jpg", preco: "R$ 34,00" },
  { nome: "Ceviche", tipo: "principal", imagem: "Comidas/ceviche.jpg", preco: "R$ 36,00" },
  { nome: "Enchiladas", tipo: "principal", imagem: "Comidas/Enchiladas.jpg", preco: "R$ 32,00" },
  { nome: "Nachos", tipo: "principal", imagem: "Comidas/nachos.jpg", preco: "R$ 20,00" },
  { nome: "Tacos", tipo: "principal", imagem: "Comidas/Tacos.jpg", preco: "R$ 24,00" },
  { nome: "Tamales", tipo: "principal", imagem: "Comidas/Tamales.jpg", preco: "R$ 25,00" },

  { nome: "Horchata", tipo: "Bebidas", imagem: "Comidas/horchata.jpg", preco: "R$ 8,00" },
  { nome: "Agua de Zamaica", tipo: "Bebidas", imagem: "Comidas/agua.jpg", preco: "R$ 8,00" },
  { nome: "Margarita", tipo: "Bebidas", imagem: "Comidas/margarita.jpg", preco: "R$ 15,00" },
  { nome: "Refrigerante", tipo: "Bebidas", imagem: "Comidas/refri.jpg", preco: "R$ 6,00" },
  { nome: "Agua", tipo: "Bebidas", imagem: "Comidas/agua normal.jpg", preco: "R$ 5,00" },

  { nome: "Quesadillas Veganas", tipo: "Veganos", imagem: "Comidas/Quesadillas_Veganas.png", preco: "R$ 22,00" },
  { nome: "Burritos Veganos", tipo: "Veganos", imagem: "Comidas/Burritos_Veganos.png", preco: "R$ 34,00" },
  { nome: "Ceviche Vegano", tipo: "Veganos", imagem: "Comidas/ceviche.jpg", preco: "R$ 36,00" },
  { nome: "Enchiladas Veganas", tipo: "Veganos", imagem: "Comidas/Enchiladas_Veganas.png", preco: "R$ 32,00" },
  { nome: "Nachos Veganos", tipo: "Veganos", imagem: "Comidas/Nachos_Veganos.png", preco: "R$ 20,00" },
  { nome: "Tacos Veganos", tipo: "Veganos", imagem: "Comidas/Tacos_Veganos.jpg", preco: "R$ 24,00" },
  { nome: "Tamales Veganos", tipo: "Veganos", imagem: "Comidas/Tamales_Veganos.png", preco: "R$ 25,00" },
];

function carregarMenu(itens) {
  const container = document.getElementById('menu-itens');
  container.innerHTML = '';
  itens.forEach(item => {
    container.innerHTML += `
      <div class="menu-item">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="menu-info">
          <h3>${item.nome}</h3>
          <span class="preco">${item.preco}</span>
        </div>
      </div>
    `;
  });
}

function filtrarMenu(tipo) {
  if (tipo === 'todos') {
    carregarMenu(menuItens);
  } else {
    const filtrado = menuItens.filter(item => item.tipo === tipo);
    carregarMenu(filtrado);
  }
}

// Reserva
const form = document.getElementById("reserva-form");
const mensagem = document.getElementById("mensagem-reserva");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  mensagem.style.display = "block";

  setTimeout(() => {
    mensagem.style.display = "none";
  }, 4000);

  form.reset();
});

// Menu Hamburguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Carregar menu no início
carregarMenu(menuItens);
