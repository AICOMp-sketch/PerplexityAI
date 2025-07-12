function sendQuery() {
  const input = document.getElementById('userInput');
  const response = document.getElementById('aiResponse');
  const userText = input.value.trim();

  if (!userText) {
    response.textContent = "Please enter a question!";
    response.style.color = "#ff8c42";
    return;
  }

  response.style.color = "#6a5acd";
  response.textContent = "Thinking...";

  setTimeout(() => {
    // Simulated AI response
    response.textContent = `🤖 "${userText}" is a great question! Imagine a smart, friendly AI giving you a detailed, insightful answer here.`;
  }, 1200);
}