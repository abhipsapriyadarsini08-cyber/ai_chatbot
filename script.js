function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value.trim();
  if (userText === "") return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);
  input.value = "";

  // Scroll down
  chatBox.scrollTop = chatBox.scrollHeight;

  // AI Response
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = generateBotResponse(userText);
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

// Simple AI logic
function generateBotResponse(input) {
  const text = input.toLowerCase();
  
  if (text.includes("hello") || text.includes("hi")) {
    return "Hey there! 👋 How are you today?";
  } else if (text.includes("how are you")) {
    return "I'm just a bot, but I’m feeling electric ⚡ thanks for asking!";
  } else if (text.includes("your name")) {
    return "I'm your AI Chatbot — your virtual buddy 💬";
  } else if (text.includes("love")) {
    return "Aww 💖 Love makes the world glow brighter!";
  } else if (text.includes("bye")) {
    return "Goodbye! Hope to chat again soon 👋";
  } else if (text.includes("time")) {
    return `The current time is ${new Date().toLocaleTimeString()}`;
  } else {
    return "Hmm... I’m still learning 🤔 Could you rephrase that?";
  }
}