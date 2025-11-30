// Source Code Modal Logic
export function openSourceModal() {
    const modal = document.getElementById('source-modal');
    const content = document.getElementById('source-modal-content');
    const textArea = document.getElementById('source-code-area');
    
    if (!modal || !content || !textArea) return;
    
    // Get full HTML including doctype
    const fullHTML = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    textArea.value = fullHTML;
    
    modal.classList.remove('hidden');
    // Small timeout to allow transition to trigger
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

export function closeSourceModal() {
    const modal = document.getElementById('source-modal');
    const content = document.getElementById('source-modal-content');
    
    if (!modal || !content) return;
    
    modal.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

export function copySourceCode() {
    const textArea = document.getElementById('source-code-area');
    const copyBtnText = document.getElementById('copy-text');
    const copyBtn = document.getElementById('copy-btn');
    
    if (!textArea || !copyBtnText || !copyBtn) return;
    
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textArea.value).then(() => {
        // Visual feedback
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied!';
        copyBtn.classList.remove('bg-brand-cyan');
        copyBtn.classList.add('bg-green-500');
        
        setTimeout(() => {
            copyBtnText.textContent = originalText;
            copyBtn.classList.add('bg-brand-cyan');
            copyBtn.classList.remove('bg-green-500');
        }, 2000);
    });
}

export function initModal() {
    const modal = document.getElementById('source-modal');
    if (!modal) return;
    
    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSourceModal();
        }
    });
}

