function addToCart(event) {
    const id = event.target.id;
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (id in cart) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function addClickEventsButtons() {
    const buttons = document.querySelectorAll('.goods__container__item__button');
    for (let button of buttons) {
        button.addEventListener("click", addToCart);
    }
} 

function getCartData() {
    const goods = JSON.parse(localStorage.getItem("goods"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    const container = document.getElementById("cart__list");
    let list = '';
    let total = 0;
    for (let id in cart) {
        let item;
        for (let good of goods) {
            if (good.id == id) {
                item = good;
            }
        }

        total += item.price * cart[id];

        list += `<div class="cart__list__item" id="${id}">
                <img src="${item.img}" alt="" class="cart__list__item__img">
                <div class="cart__list__item__text">
                    <p class="cart__list__item__name">
                        ${item.name}
                    </p>
                    <p class="cart__list__item__price">
                        ${item.price * cart[id]}  
                    </p>
                </div>
                <div class="cart__list__item__amount-cnt">
                    <p class="cart__list__item__remove">-</p>
                    <p class="cart__list__item__amount">${cart[id]}</p>
                    <p class="cart__list__item__add">+</p>
                </div>
                <div class="cart__list__item__delete">x</div>
            </div>`;
    }



    list += `<div class="cart__list__total">
            Total: 
            <p class="cart__list__total__text">${total}</p>
            </div>
            <a href="order.html"><button class="cart__list__button">
                Order now
            </button></a>`

    container.innerHTML = list;
    localStorage.setItem("total", String(total));
}

function addClickEventsRemove() {
    const buttons = document.querySelectorAll(".cart__list__item__remove");
    for (let button of buttons) {
        button.addEventListener("click", removeOneFromCart);
    }
}

function addClickEventsAdd() {
    const buttons = document.querySelectorAll(".cart__list__item__add");
    for (let button of buttons) {
        button.addEventListener("click", addOneToCart);
    }
}

function removeOneFromCart(event) {
    const item = event.target.parentNode.parentNode;
    const amount = event.target.parentNode.children[1];
    const id = item.id;
    const cart = JSON.parse(localStorage.getItem("cart"));
    for (let key in cart) {
        if (key == id) {
            if (!(cart[id] == 1)) {
                cart[id] -= 1;
                removeOnePrice(item);
            }
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    amount.innerHTML = cart[id];
}

function addOneToCart(event) {
    const item = event.target.parentNode.parentNode;
    const amount = event.target.parentNode.children[1];
    const id = item.id;
    const cart = JSON.parse(localStorage.getItem("cart"));
    for (let key in cart) {
        if (key == id) {
            cart[id] += 1;
            addOnePrice(item);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    amount.innerHTML = cart[id];
}

function addClickEventsDelete() {
    const buttons = document.querySelectorAll(".cart__list__item__delete");
    for (let button of buttons) {
        button.addEventListener("click", deleteFromCart);
    }
}

function deleteFromCart(event) {
    const item = event.target.parentNode;
    const price = item.querySelector('.cart__list__item__price').innerHTML;
    const id = item.id;
    const cart = JSON.parse(localStorage.getItem("cart"));

    for (let key in cart) {
        if (key == id) {
            delete cart[key];
            removePriceFromTotal(price);
        }
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById(id).remove();
} 

function addOnePrice(item) {
    const id = item.id;
    const price = item.querySelector('.cart__list__item__price');
    const goods = JSON.parse(localStorage.getItem("goods"));
    
    for (let good of goods) {
        if (good.id == id) {
            const sum = Number(price.innerHTML) + good.price;
            price.innerHTML = sum;
            addPriceToTotal(good.price);
        }
    }
}

function removeOnePrice(item) {
    const id = item.id;
    const price = item.querySelector('.cart__list__item__price');
    const goods = JSON.parse(localStorage.getItem("goods"));
    
    for (let good of goods) {
        if (good.id == id) {
            const sum = Number(price.innerHTML) - good.price;
            price.innerHTML = sum;
            removePriceFromTotal(good.price);
        }
    }
}

function addPriceToTotal(price) {
    const total = localStorage.getItem("total");
    const totalContainer = document.querySelector('.cart__list__total__text');
    const sum = Number(total) + price;
    totalContainer.innerHTML = sum;

    localStorage.setItem("total", String(sum))
}

function removePriceFromTotal(price) {
    const total = localStorage.getItem("total");
    const totalContainer = document.querySelector('.cart__list__total__text');
    const sum = Number(total) - price;
    totalContainer.innerHTML = sum;

    localStorage.setItem("total", String(sum))
}

addClickEventsButtons();
getCartData();
addClickEventsRemove();
addClickEventsAdd();
addClickEventsDelete();
