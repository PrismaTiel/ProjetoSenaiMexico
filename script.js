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
  
  document.getElementById('reserva-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('reserva-msg').textContent = 'Reserva recebida com sucesso! Entraremos em contato.';
    this.reset();
  });
  
  // Carrega todos ao iniciar
  carregarMenu(menuItens);