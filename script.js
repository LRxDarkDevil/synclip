document.addEventListener('DOMContentLoaded', () => {
    // Get all letter elements
    const letters = document.querySelectorAll('.letter');
    
    // Animate letters moving closer and glowing
    setTimeout(() => {
        letters.forEach(letter => {
            letter.classList.add('glow');
        });
    }, 500); // Start glowing after 0.5 seconds

    // After animation (2 seconds total), mark body as loaded and show the website
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000); // Total animation duration
});