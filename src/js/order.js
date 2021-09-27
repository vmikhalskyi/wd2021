const orderNumber = document.querySelector('.success__number');
const number = Math.round(Math.random() * 10000000);
orderNumber.innerHTML = number;
localStorage.removeItem('cart');
