// Function to open Etsy Shop
function openEtsy(event) {
    event.preventDefault();
    // Substitua com o link real da loja Etsy
    const etsyUrl = 'https://www.etsy.com/shop/YourShopName';
    window.open(etsyUrl, '_blank');
    
    // Add click animation
    event.target.closest('.card-link').style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.closest('.card-link').style.transform = '';
    }, 200);
}

// Function to open Website
function openWebsite(event) {
    event.preventDefault();
    // Substitua com o link real do website
    const websiteUrl = 'https://debstrainstitches.com';
    window.open(websiteUrl, '_blank');
    
    // Add click animation
    event.target.closest('.card-link').style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.closest('.card-link').style.transform = '';
    }, 200);
}

// Add smooth animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation on load
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Subtle entrance animations
    const animateOnLoad = () => {
        const elements = document.querySelectorAll('.header, .logo, .card');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(15px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 150 + (index * 100));
        });
    };
    
    animateOnLoad();
});
