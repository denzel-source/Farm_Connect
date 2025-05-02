// Simulated data passed from checkout (in a real setup, you'd use localStorage or session)
// const basket = {
//     spinach: { name: "Spinach", quantity: 2, price: 15 },
//     maize: { name: "Maize", quantity: 3, price: 40 }
//   };
  const basket = JSON.parse(localStorage.getItem("basket")) || {};

  function renderConfirmation() {
    const productNames = Object.values(basket).map(item => item.name).join(", ");
    const totalQty = Object.values(basket).reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = Object.values(basket).reduce((sum, item) => sum + (item.quantity * item.price), 0);
  
    document.getElementById("confirmedProducts").textContent = productNames;
    document.getElementById("confirmedQuantity").textContent = totalQty;
    document.getElementById("confirmedTotal").textContent = totalCost;
  }
  
  window.onload = renderConfirmation;
