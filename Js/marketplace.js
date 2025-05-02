// Initial inventory
const inventory = {
    spinach: { name: "Spinach", available: 10, price: 15 },
    maize: { name: "Maize", available: 20, price: 40 },
    milk: { name: "Milk", available: 8, price: 30 }
  };
  
  const basket = {};
  
  const productList = document.getElementById("productList");
  const basketList = document.getElementById("basketList");
  
  function renderMarketplace() {
    productList.innerHTML = "";
    for (let key in inventory) {
      const product = inventory[key];
  
      const card = document.createElement("div");
      card.className = "product-card";
  
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: KES ${product.price}</p>
        <p>Available: ${product.available}</p>
        <button onclick="addToBasket('${key}')">Add to Basket</button>
      `;
  
      productList.appendChild(card);
    }
  }
  
  function renderBasket() {
    basketList.innerHTML = "";
    for (let key in basket) {
      const item = basket[key];
  
      const card = document.createElement("div");
      card.className = "product-card basket-item";
  
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: KES ${item.quantity * item.price}</p>
        <button onclick="increaseItem('${key}')">+</button>
        <button onclick="decreaseItem('${key}')">-</button>
        <button onclick="removeItem('${key}')">Remove</button>
      `;
  
      basketList.appendChild(card);
    }
  }
  
  function addToBasket(key) {
    if (inventory[key].available > 0) {
      inventory[key].available -= 1;
  
      if (basket[key]) {
        basket[key].quantity += 1;
      } else {
        basket[key] = { ...inventory[key], quantity: 1 };
      }
  
      renderMarketplace();
      renderBasket();
      localStorage.setItem("basket", JSON.stringify(basket));

    } else {
      alert("Out of stock!");
    }
  }
  
  function increaseItem(key) {
    if (inventory[key].available > 0) {
      inventory[key].available -= 1;
      basket[key].quantity += 1;
      renderMarketplace();
      renderBasket();
      localStorage.setItem("basket", JSON.stringify(basket));

    } else {
      alert("No more stock!");
    }
  }
  
  function decreaseItem(key) {
    if (basket[key].quantity > 1) {
      basket[key].quantity -= 1;
      inventory[key].available += 1;
    } else {
      removeItem(key);
      return;
    }
    renderMarketplace();
    renderBasket();
    localStorage.setItem("basket", JSON.stringify(basket));

  }
  
  function removeItem(key) {
    inventory[key].available += basket[key].quantity;
    delete basket[key];
    renderMarketplace();
    renderBasket();
  }
  
  window.onload = () => {
    renderMarketplace();
    renderBasket();
    localStorage.setItem("basket", JSON.stringify(basket));

  };
  