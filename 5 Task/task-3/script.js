const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
    { id: 4, name: "Monitor", price: 300 }
];

const productContainer = document.querySelector("#productContainer");
const cartCount = document.querySelector("#cartCount");
const totalPrice = document.querySelector("#totalPrice");
const cartItemsList = document.querySelector("#cartItemsList");

const cart = [];

function updateCartUI() {

    const count = cart.length;
    cartCount.textContent = `Cart: ${count} ${count === 1 ? "item" : "items"}`;

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalPrice.textContent = `Total: $${total}`;

    if (cartItemsList) {
        cartItemsList.innerHTML = "";

        if (cart.length === 0) {
            const emptyLi = document.createElement("li");
            emptyLi.className = "empty-cart-msg";
            emptyLi.textContent = "Your cart is empty.";
            cartItemsList.append(emptyLi);
        } else {
            cart.forEach((item, index) => {
                const li = document.createElement("li");
                li.className = "cart-item-row";

                const infoSpan = document.createElement("span");
                infoSpan.className = "cart-item-info";
                infoSpan.textContent = item.name;

                const priceSpan = document.createElement("span");
                priceSpan.className = "cart-item-price";
                priceSpan.textContent = `($${item.price})`;
                infoSpan.append(priceSpan);

                const removeBtn = document.createElement("button");
                removeBtn.className = "btn-remove";
                removeBtn.textContent = "Remove";

                removeBtn.addEventListener("click", () => {
                    cart.splice(index, 1);
                    updateCartUI();
                });

                li.append(infoSpan, removeBtn);
                cartItemsList.append(li);
            });
        }
    }
}

function addToCart(product) {
    cart.push(product);
    updateCartUI();
}

function renderProducts() {
    productContainer.innerHTML = "";

    products.forEach((product) => {

        const card = document.createElement("div");
        card.classList.add("product-card");
        card.dataset.id = product.id;

        const nameEl = document.createElement("h4");
        nameEl.classList.add("product-name");
        nameEl.textContent = product.name;

        const priceEl = document.createElement("p");
        priceEl.classList.add("product-price");
        priceEl.textContent = `$${product.price}`;

        const addBtn = document.createElement("button");
        addBtn.classList.add("btn-add");
        addBtn.textContent = "Add to Cart";

        addBtn.addEventListener("click", () => {
            addToCart(product);
        });

        card.append(nameEl, priceEl, addBtn);
        productContainer.append(card);
    });
}

renderProducts();
updateCartUI();
