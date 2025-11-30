// Main initialization script
import { initTheme, toggleTheme } from './theme.js';
import { initLanguage, toggleLanguage } from './language.js';
import { openSourceModal, closeSourceModal, copySourceCode, initModal } from './modal.js';
import { filterProjects } from './projects.js';
import { initNavigation, toggleMobileMenu } from './navigation.js';
import { initScrollAnimations } from './animations.js';
import { toggleChat, sendMessage, initChatbot } from './chatbot.js';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initModal();
    initNavigation();
    initScrollAnimations();
    initChatbot();
});

// Make functions globally available for inline event handlers
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.openSourceModal = openSourceModal;
window.closeSourceModal = closeSourceModal;
window.copySourceCode = copySourceCode;
window.filterProjects = filterProjects;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;

