document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is linked and ready.");

    // Smooth scrolling and show sections on click
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('main').style.display = 'flex';
            
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden'); // Hide all sections
            });

            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.remove('hidden'); // Show the clicked section

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
