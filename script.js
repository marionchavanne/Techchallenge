const message = "Thank you, your message has been sent.";

document.getElementById("contactform");
addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
