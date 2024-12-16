const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector("#send-btn");

function appendMessage(content, isOutgoing) {
  const chat = document.createElement("li");
  chat.classList.add("chat", isOutgoing ? "outgoing" : "incoming");

  const message = document.createElement("p");
  message.textContent = content;

  if (!isOutgoing) {
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.textContent = "smart_toy";
    chat.appendChild(icon);
  }

  chat.appendChild(message);
  chatbox.appendChild(chat);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const message = chatInput.value.trim();

  if (message) {
    appendMessage(message, true);
    chatInput.value = "";
    chatInput.focus();

    setTimeout(() => {
      const reply = "This is a chatbot reply!";
      appendMessage(reply, false);
    }, 1000);
  }
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});
