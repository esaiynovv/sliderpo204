var currentSlide = 0;
    var dotsContainer = document.getElementById('dots-container');

    function showSlide(index) {
        var slides = document.querySelector('.slides');
        currentSlide = index;
        slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3; // Общее количество слайдов
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + 3) % 3; // Общее количество слайдов
        showSlide(currentSlide);
    }

    function updateDots() {
        var dots = '';
        for (var i = 0; i < 3; i++) { // Общее количество слайдов
            dots += '<div class="dot ' + (i === currentSlide ? 'active' : '') + '" onclick="showSlide(' + i + ')"></div>';
        }
        dotsContainer.innerHTML = dots;
    }