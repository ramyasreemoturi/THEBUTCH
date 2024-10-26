let currentSlide = 0;

function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const totalSlides = document.querySelectorAll('.slider-item').length;
    const slideWidth = document.querySelector('.slider-item').clientWidth;

    // Calculate new slide position
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to first slide
    }

    const offset = -currentSlide * (slideWidth + 20); // 20px is the margin between slides
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}
