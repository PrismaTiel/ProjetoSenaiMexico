const menuItens = [
    { nome: "Quesadillas", tipo: "principal", imagem: "Comidas/Quesadillas.jpg" },
    { nome: "Burritos", tipo: "principal", imagem: "Comidas/Borritos.jpg" },
    { nome: "Ceviche", tipo: "principal", imagem: "Comidas/ceviche.jpg" },
    { nome: "Enchiladas", tipo: "principal", imagem: "Comidas/Enchiladas.jpg" },
    { nome: "Nachos", tipo: "principal", imagem: "Comidas/nachos.jpg" },
    { nome: "Tacos", tipo: "principal", imagem: "Comidas/Tacos.jpg" },
    { nome: "Tamales", tipo: "principal", imagem: "Comidas/Tamales.jpg" },
    { nome: "Horchata", tipo: "Bebidas", imagem: "Comidas/horchata.jpg" },
    { nome: "Agua de Zamaica", tipo: "Bebidas", imagem: "Comidas/agua.jpg" },
    { nome: "Margarita", tipo: "Bebidas", imagem: "Comidas/margarita.jpg" },
    { nome: "Refrigerante", tipo: "Bebidas", imagem: "Comidas/refri.jpg" },
    { nome: "Agua", tipo: "Bebidas", imagem: "Comidas/agua normal.jpg" },
    { nome: "Quesadillas", tipo: "principal", imagem: "Comidas/Quesadillas.jpg" },
    { nome: "Burritos", tipo: "principal", imagem: "Comidas/Borritos.jpg" },
    { nome: "Ceviche", tipo: "principal", imagem: "Comidas/ceviche.jpg" },
    { nome: "Enchiladas", tipo: "principal", imagem: "Comidas/Enchiladas.jpg" },
    { nome: "Nachos", tipo: "principal", imagem: "Comidas/nachos.jpg" },
    { nome: "Tacos", tipo: "Veganos", imagem: "Comidas/Tacos_Veganos.jpg" },
    { nome: "Tamales Veganos", tipo: "Veganos", imagem: "Comidas/Tamales_Veganos.jpeg" },
];
  
  function carregarMenu(itens) {
    const container = document.getElementById('menu-itens');
    container.innerHTML = '';
    itens.forEach(item => {
      container.innerHTML += `
        <div class="menu-item">
          <img src="${item.imagem}" alt="${item.nome}">
          <h3>${item.nome}</h3>
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

const form = document.getElementById("reserva-form");
const mensagem = document.getElementById("mensagem-reserva");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Mostra a mensagem
  mensagem.style.display = "block";

  // Esconde após 4 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 4000);

  // Limpa os campos
  form.reset();
});
  
  // Carrega todos ao iniciar
  carregarMenu(menuItens);