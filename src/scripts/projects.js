// Project Filter Logic
export function filterProjects(category, btn) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update buttons
    buttons.forEach(b => {
        b.classList.remove('bg-brand-cyan', 'text-brand-dark');
        b.classList.add('text-brand-muted');
    });
    btn.classList.remove('text-brand-muted');
    btn.classList.add('bg-brand-cyan', 'text-brand-dark');

    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
            // Small animation reset
            card.style.opacity = '0';
            setTimeout(() => card.style.opacity = '1', 50);
        } else {
            card.style.display = 'none';
        }
    });
}

