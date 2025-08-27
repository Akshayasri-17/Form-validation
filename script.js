document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let tickets = document.getElementById("tickets").value.trim();
  let payment = document.getElementById("payment").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let ticketType = document.querySelector('input[name="ticket"]:checked');
  let msg = document.getElementById("msg");

  // Regex checks
  let nameRegex = /^[A-Za-z ]{3,}$/;
  let phoneRegex = /^[0-9]{10}$/;

  if (!nameRegex.test(name)) {
    msg.textContent = "❌ Enter a valid name (min 3 letters)";
    msg.style.color = "red";
    return;
  }
  if (!phoneRegex.test(phone)) {
    msg.textContent = "❌ Phone must be 10 digits";
    msg.style.color = "red";
    return;
  }
  if (!gender) {
    msg.textContent = "❌ Please select your gender";
    msg.style.color = "red";
    return;
  }
  if (!ticketType) {
    msg.textContent = "❌ Please choose a ticket type";
    msg.style.color = "red";
    return;
  }
  if (tickets < 1 || tickets > 5) {
    msg.textContent = "❌ Tickets must be between 1 and 5";
    msg.style.color = "red";
    return;
  }
  if (!payment) {
    msg.textContent = "❌ Please select a payment method";
    msg.style.color = "red";
    return;
  }

  alert("✅ Registration Successfully Done!");
  msg.textContent = "✅ Payment Successful & Registration Confirmed!";
  msg.style.color = "green";
  document.getElementById("registrationForm").reset();
});
