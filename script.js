function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const messageDiv = document.getElementById("welcomeMessage");

  if (name) {
    messageDiv.innerText = `Hi ${name}, welcome to my page!`;
  } else {
    messageDiv.innerText = "Please enter your name 🙂";
  }
}

// Optional: Allow pressing Enter to submit
document.getElementById("nameInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    showMessage();
  }
});
