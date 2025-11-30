// Chatbot Logic
let isChatOpen = false;
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

export function toggleChat() {
    if (!chatWindow) return;
    
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
        chatWindow.classList.remove('hidden');
        // Use a small timeout to allow display:block to apply before opacity transition
        setTimeout(() => {
            chatWindow.classList.remove('scale-0', 'opacity-0'); 
        }, 10);
        initChatWelcome();
    } else {
        chatWindow.classList.add('hidden');
    }
}

export function initChatWelcome() {
    if (!chatMessages) return;
    
    // Check if messages already exist to avoid duplicates or re-render
    if (chatMessages.children.length === 0) {
        addBotMessage(getWelcomeText());
    }
}

function getWelcomeText() {
    const isEnglish = document.body.classList.contains('english-mode');
    return isEnglish 
        ? "Hi! I'm Andreas's digital assistant. How can I help you build your AI solution?" 
        : "Hallo! Ich bin Andreas' digitaler Assistent. Wie kann ich Ihnen bei Ihrer KI-Lösung helfen?";
}

export function sendMessage() {
    if (!chatInput || !chatMessages) return;
    
    const text = chatInput.value.trim();
    if (!text) return;

    // Add User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message flex justify-end';
    userDiv.innerHTML = `<div class="bg-brand-cyan text-brand-dark px-3 py-2 rounded-lg rounded-tr-none text-xs max-w-[80%]">${text}</div>`;
    chatMessages.appendChild(userDiv);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate Bot Response
    setTimeout(() => {
        const isEnglish = document.body.classList.contains('english-mode');
        const response = isEnglish 
            ? "Thanks for your message! This is a demo chat. Please use the contact form to reach Andreas directly."
            : "Danke für Ihre Nachricht! Dies ist ein Demo-Chat. Bitte nutzen Sie das Kontaktformular, um Andreas direkt zu erreichen.";
        addBotMessage(response);
    }, 1000);
}

function addBotMessage(text) {
    if (!chatMessages) return;
    
    const botDiv = document.createElement('div');
    botDiv.className = 'chat-message flex justify-start';
    botDiv.innerHTML = `<div class="bg-brand-gray text-brand-white px-3 py-2 rounded-lg rounded-tl-none text-xs max-w-[80%] border border-brand-border">${text}</div>`;
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

export function initChatbot() {
    if (!chatInput) return;
    
    // Enter key for chat
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Make initChatWelcome available globally for language toggle
    window.initChatWelcome = initChatWelcome;
}

