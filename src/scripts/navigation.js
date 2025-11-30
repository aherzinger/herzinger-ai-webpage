// Navbar Scroll Effect
export function initNavigation() {
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (!nav) return;
        
        // In light theme we want specific scroll behavior
        const isLight = document.body.classList.contains('theme-light');
        
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'bg-brand-dark/90');
            nav.classList.remove('glass-panel');
            if (isLight) {
                nav.classList.remove('bg-brand-dark/90');
                nav.classList.add('bg-white/90');
            }
        } else {
            nav.classList.remove('shadow-lg', 'bg-brand-dark/90', 'bg-white/90');
            nav.classList.add('glass-panel');
        }
    });
}

// Mobile Menu Toggle
export function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
}

