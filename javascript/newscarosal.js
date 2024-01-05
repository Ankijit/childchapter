let customCurrentSlide = 0;
const customSlides = document.querySelectorAll('.custom-carousel-item');
const customDotsContainer = document.querySelector('.custom-carousel-dots');

function showCustomSlide(index) {
    if (index < 0) {
        customCurrentSlide = customSlides.length - 1;
    } else if (index >= customSlides.length) {
        customCurrentSlide = 0;
    } else {
        customCurrentSlide = index;
    }

    const transformValue = -customCurrentSlide * 106 + '%';
    document.querySelector('.custom-carousel-track').style.transform = `translateX(${transformValue})`;

    updateCustomDots();
}

function updateCustomDots() {
    const dots = Array.from(customDotsContainer.children);

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === customCurrentSlide);
    });
}

function customPrevSlide() {
    showCustomSlide(customCurrentSlide - 1);
}

function customNextSlide() {
    showCustomSlide(customCurrentSlide + 1);
}

function createCustomDots() {
    for (let i = 0; i < customSlides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('custom-dot');
        dot.addEventListener('click', () => showCustomSlide(i));
        customDotsContainer.appendChild(dot);
    }

    updateCustomDots();
}
function startcustomAutoSlide() {
    setInterval(() => {
        customNextSlide();
    }, intervalTime);
}

createCustomDots();
startcustomAutoSlide();