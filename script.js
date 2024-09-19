const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Predefined responses with numbers and Google Drive links for SOP documents
const predefinedResponses = {
  "1": `You selected Module 1: HR<br>Available SOPs:<br>
        1. <a href="https://drive.google.com/file/d/1A2B3C4D/view" target="_blank">Onboarding SOP</a><br>
        2. <a href="https://drive.google.com/file/d/5D6E7F8G/view" target="_blank">Payroll SOP</a><br>
        3. <a href="https://drive.google.com/file/d/9H0IJK1L/view" target="_blank">Leave Management SOP</a>`,
  "2": `You selected Module 2: Finance<br>Available SOPs:<br>
        1. <a href="https://drive.google.com/file/d/2L3M4N5O/view" target="_blank">Budgeting SOP</a><br>
        2. <a href="https://drive.google.com/file/d/6P7Q8R9S/view" target="_blank">Expense Reimbursement SOP</a>`,
  "3": `You selected Module 3: IT<br>Available SOPs:<br>
        1. <a href="https://drive.google.com/file/d/3T4U5V6W/view" target="_blank">Network Setup SOP</a><br>
        2. <a href="https://drive.google.com/file/d/7X8Y9Z0A/view" target="_blank">Software Deployment SOP</a>`,
  "help": `Type the number corresponding to the module you want to access:<br>
           1. HR<br>2. Finance<br>3. IT`,
  "hi": `Hello! I'm here to help you with SOP documents. Type 'help' to see available modules.`
};

// Function to append messages to the chat window
function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerHTML = message;  // Allow HTML content (like anchor tags) in bot responses
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
}

// Function to get the bot's response based on the user's message
function getBotResponse(message) {
  message = message.trim().toLowerCase();
  if (predefinedResponses[message]) {
    return predefinedResponses[message];
  } else {
    return "Sorry, I didn't understand that. Type 'help' for assistance.";
  }
}

// Function to handle sending messages
function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage) {
    appendMessage('user', userMessage);
    userInput.value = '';

    // Handle bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      appendMessage('bot', botResponse);
    }, 500); // Simulate typing delay
  }
}

// Send message when clicking the Send button
sendBtn.addEventListener('click', sendMessage);

// Send message when pressing Enter key
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
