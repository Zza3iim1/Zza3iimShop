(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // ضع الـ Public Key هنا
})();

function openForm(product) {
  document.getElementById("orderModal").style.display = "flex";
  document.getElementById("product").value = product;
}

function closeForm() {
  document.getElementById("orderModal").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("✅ Order sent successfully!");
      closeForm();
    }, (err) => {
      alert("❌ Error: " + JSON.stringify(err));
    });
});