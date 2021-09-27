const goods = [
    {
        id: 1,
        name: "Хлопковая футболка стрейч",
        price: 30,
        img: "img/goods_item1.jpg"

    },
    {
        id: 2,
        name: "Тренч из нейлона",
        price: 100,
        img: "img/goods_item2.jpg"
    },
    {
        id: 3,
        name: "Рубашка из фланели в клетку",
        price: 70,
        img: "img/goods_item3.jpg"
    },
    {
        id: 4,
        name: "Рубашка relaxed-fit в клетку",
        price: 90,
        img: "img/goods_item4.jpg"
    },
    {
        id: 5,
        name: "Футболка трикотажная",
        price: 20,
        img: "img/goods_item5.jpg"
    },
    {
        id: 6,
        name: "Непромокаемая парка с капюшоном",
        price: 120,
        img: "img/goods_item7.jpg"
    }
];

localStorage.setItem("goods", JSON.stringify(goods));

const goodsContainer = document.getElementById("goods__container");

let list = "";

goods.forEach(item => {
    list += `<div class="goods__container__item">
    <img class="goods__container__item__img" src="${item.img}" alt="">
    <p class="goods__container__item__name">
        ${item.name}
    </p>
    <p class="goods__container__item__price">
        $${item.price}
    </p>
    <button class="goods__container__item__button" id="${item.id}">Buy</button>
    </div>`;
});

goodsContainer.innerHTML = list;
