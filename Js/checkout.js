// Simulated basket data (replace this with localStorage or shared state if needed)
// const basket = {
//     spinach: { name: "Spinach", quantity: 2, price: 15 },
//     milk: { name: "Milk", quantity: 1, price: 30 },
//     maize: { name: "Maize", quantity: 3, price: 40 }
//   };
  const basket = JSON.parse(localStorage.getItem("basket")) || {};
  
  function renderCheckout() {
    const tableBody = document.getElementById("checkoutTableBody");
    const totalDisplay = document.getElementById("totalAmount");
    tableBody.innerHTML = "";
  
    let total = 0;
  
    for (let key in basket) {
      const item = basket[key];
      const subtotal = item.quantity * item.price;
      total += subtotal;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>KES ${item.price}</td>
        <td>KES ${subtotal}</td>
      `;
      tableBody.appendChild(row);
    }
  
    totalDisplay.textContent = total;
  }
  
  function confirmOrder() {
    alert("Order confirmed! Redirecting to confirmation page...");
    window.location.href = "OrderConfirmation.html";
  }
  
  window.onload = renderCheckout;
 