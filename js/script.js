
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetSection = document.querySelector(anchor.getAttribute('href'));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    var fadeElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', function() {
        fadeElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    });
