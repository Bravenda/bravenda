
const carrinho = [];

function navegar(secao) {
  document.querySelectorAll('main > section').forEach(el => el.style.display = 'none');
  document.getElementById(secao).style.display = 'block';
}

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
  mostrarInfobox(`${produto} foi adicionado ao carrinho.`);
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';
  carrinho.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = prod;
    lista.appendChild(li);
  });
}

function finalizarCompra() {
  mostrarInfobox('Compra finalizada com sucesso via Pix!');
  carrinho.length = 0;
  atualizarCarrinho();
  navegar('produtos');
}

function mostrarInfobox(mensagem) {
  const box = document.getElementById('infobox');
  box.textContent = mensagem;
  box.style.display = 'block';
  setTimeout(() => {
    box.style.display = 'none';
  }, 3000);
}
