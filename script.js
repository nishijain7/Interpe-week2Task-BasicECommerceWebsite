const productsData = [
  {id:1, title:'Classic White T-shirt', price:399, category:'Clothing', desc:'100% cotton'},
  {id:2, title:'Running Shoes', price:2499, category:'Footwear', desc:'Lightweight, comfy'},
  {id:3, title:'Wireless Headphones', price:3499, category:'Electronics', desc:'Bluetooth, 20h battery'},
  {id:4, title:'Ceramic Mug', price:199, category:'Home', desc:'Microwave safe'},
  {id:5, title:'Denim Jeans', price:1299, category:'Clothing', desc:'Slim fit'},
  {id:6, title:'Backpack 20L', price:1799, category:'Bags', desc:'Water resistant'}
];

let cart = {};

const productsEl = document.getElementById('products');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const emptyMsg = document.getElementById('emptyMsg');

function init() {
  renderProducts(productsData);
  loadCart();
  attachEvents();
}

function renderProducts(list) {
  productsEl.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="title">${p.title}</div>
      <small>${p.desc}</small>
      <div class="price">₹${p.price}</div>
      <button data-id="${p.id}">Add to Cart</button>
    `;
    productsEl.appendChild(card);
  });
}

function attachEvents() {
  productsEl.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      addToCart(Number(e.target.dataset.id));
    }
  });

  document.getElementById('openCart').addEventListener('click', () => {
    cartPanel.classList.toggle('open');
  });

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      alert('Cart is empty');
    } else {
      alert('Demo checkout complete!');
      cart = {};
      saveCart();
      renderCart();
    }
  });

  cartItemsEl.addEventListener('click', e => {
    const btn = e.target;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === 'inc') changeQty(id, 1);
    if (btn.dataset.action === 'dec') changeQty(id, -1);
    if (btn.dataset.action === 'remove') removeFromCart(id);
  });
}

function addToCart(id) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;
  if (cart[id]) cart[id].qty++;
  else cart[id] = { product, qty: 1 };
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    emptyMsg.style.display = 'block';
    cartTotalEl.textContent = '₹0';
    cartCountEl.style.display = 'none';
    return;
  }
  emptyMsg.style.display = 'none';
  let total = 0
