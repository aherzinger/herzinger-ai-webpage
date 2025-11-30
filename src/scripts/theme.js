// Theme Toggle Logic
export function initTheme() {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('theme-light');
        themeIcon.textContent = 'dark_mode';
    }
}

export function toggleTheme() {
    document.body.classList.toggle('theme-light');
    const icon = document.getElementById('theme-icon');
    
    if (document.body.classList.contains('theme-light')) {
        icon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    } else {
        icon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    }
}

