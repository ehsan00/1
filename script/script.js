const button = document.getElementById("read-more-btn");
  const message = document.getElementById("message");

  button.addEventListener("click", function() {
    message.textContent = "This is te new paragraph";
    message.style.color = "blue";
  });