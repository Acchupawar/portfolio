ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.skills-container, .project-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-conten', { origin: 'right' });
