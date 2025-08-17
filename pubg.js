function openOrderForm(product, price) {
  document.getElementById("selectedProduct").value = product;
  document.getElementById("selectedPrice").value = price;
  document.getElementById("orderForm").style.display = "block";
}

function closeOrderForm() {
  document.getElementById("orderForm").style.display = "none";
}

function sendOrder() {
  let product = document.getElementById("selectedProduct").value;
  let price = document.getElementById("selectedPrice").value;
  let playerId = document.getElementById("playerId").value;
  let playerName = document.getElementById("playerName").value;
  let phone = document.getElementById("phone").value;

  alert(`Order Sent ✅\n\nProduct: ${product}\nPrice: ${price} EGP\nID: ${playerId}\nName: ${playerName}\nPhone: ${phone}\n\nPlease send payment to 01124054325 (Etisalat Cash).`);
  
  closeOrderForm();
}