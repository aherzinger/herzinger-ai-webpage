// Language Toggle Logic
export function initLanguage() {
    // Check for saved language preference or default to German
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        document.body.classList.add('english-mode');
    }
}

export function toggleLanguage() {
    document.body.classList.toggle('english-mode');
    
    const isEnglish = document.body.classList.contains('english-mode');
    localStorage.setItem('language', isEnglish ? 'en' : 'de');
    
    // Update Chatbot Welcome if chat is initialized
    if (window.initChatWelcome) {
        window.initChatWelcome();
    }
}

