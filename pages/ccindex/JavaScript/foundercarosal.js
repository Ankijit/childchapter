let founderCurrentSlide = 0;
    const founderIntervalTime = 6000;
    const founderSlides = document.querySelectorAll('.founder-carousel-item');
    const founderDotsContainer = document.querySelector('.founder-carousel-dots');

    function founderShowSlide(index) {
        if (index < 0) {
            founderCurrentSlide = founderSlides.length - 1;
        } else if (index >= founderSlides.length) {
            founderCurrentSlide = 0;
        } else {
            founderCurrentSlide = index;
        }

        const founderTransformValue = -founderCurrentSlide * 100 + '%';
        document.querySelector('.founder-carousel-track').style.transform = `translateX(${founderTransformValue})`;

        founderUpdateDots();
    }

    function founderUpdateDots() {
        const founderDots = Array.from(founderDotsContainer.children);

        founderDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === founderCurrentSlide);
        });
    }

    function founderPrevSlide() {
        founderShowSlide(founderCurrentSlide - 1);
    }

    function founderNextSlide() {
        founderShowSlide(founderCurrentSlide + 1);
    }

    function founderCreateDots() {
        for (let i = 0; i < founderSlides.length; i++) {
            const founderDot = document.createElement('div');
            founderDot.classList.add('founder-dot');
            founderDot.addEventListener('click', () => founderShowSlide(i));
            founderDotsContainer.appendChild(founderDot);
        }

        founderUpdateDots();
    }
    function founderStartAutoSlide() {
        setInterval(() => {
            founderNextSlide();
        }, founderIntervalTime);
    }

    founderCreateDots();
    founderStartAutoSlide();