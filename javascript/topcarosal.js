let currentSlide = 0;
const intervalTime = 4000;
const slides = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-dots');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const transformValue = -currentSlide * 100 + '%';
    document.querySelector('.carousel-track').style.transform = `translateX(${transformValue})`;

    updateDots();
}

function updateDots() {
    const dots = Array.from(dotsContainer.children);

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }

    updateDots();
}
function startAutoSlide() {
    setInterval(() => {
        nextSlide();
    }, intervalTime);
}

createDots();
startAutoSlide();
