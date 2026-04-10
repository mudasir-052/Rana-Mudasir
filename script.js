function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("orders")) || [];
  cart.push({ name, price });
  localStorage.setItem("orders", JSON.stringify(cart));
  alert(`${name} added to your order!`);
}

function displayOrders() {
  const orderList = document.getElementById("orderList");
  const cart = JSON.parse(localStorage.getItem("orders")) || [];

  if (cart.length === 0) {
    orderList.innerHTML = "<p>You have no orders yet.</p>";
    return;
  }

  orderList.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "order";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: PKR ${item.price}</p>
      <button onclick="removeOrder(${index})">Remove</button>
    `;
    orderList.appendChild(div);
  });
}

function removeOrder(index) {
  const cart = JSON.parse(localStorage.getItem("orders")) || [];
  cart.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(cart));
  displayOrders();
}

function clearOrders() {
  localStorage.removeItem("orders");
  displayOrders();
}

function searchFood() {
  const searchBar = document.getElementById("searchBar");
  const query = searchBar.value.trim().toLowerCase();
  const error = document.getElementById("searchError");

  if (query === "") {
    error.textContent = "Please enter something to search.";
    return;
  }

  error.textContent = "";
  alert(`Searching for: ${query}`);
  // Redirect or filter logic can be added here
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const contactMsg = document.getElementById("contactMsg");

  if (name && email && message) {
    contactMsg.textContent = "Thank you! We'll get back to you shortly.";
    document.getElementById("contactForm").reset();
  } else {
    contactMsg.textContent = "Please fill in all fields.";
  }
}

// Run on orders page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("orderList")) {
    displayOrders();
  }
});
