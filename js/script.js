document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is linked and ready.");

    // Smooth scrolling and show sections on click
    document.querySelectorAll('nav a, .back-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('back-link')) {
                // Hide all sections and show main menu
                document.querySelector('main').style.display = 'none';
                document.querySelectorAll('section').forEach(section => {
                    section.classList.add('hidden');
                });
                document.querySelector('.landing-page').style.display = 'flex';
            } else {
                // Hide main menu and show selected section
                document.querySelector('main').style.display = 'flex';
                document.querySelectorAll('section').forEach(section => {
                    section.classList.add('hidden');
                });

                const targetSection = document.querySelector(this.getAttribute('href'));
                targetSection.classList.remove('hidden');

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                document.querySelector('.landing-page').style.display = 'none';
            }
        });
    });
});
