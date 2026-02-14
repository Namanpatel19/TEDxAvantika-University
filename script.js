document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       PART 1: HERO BACKGROUND SLIDER
       ========================================= */
    const images = [
        "Background/Background_image1.JPG",
        "Background/Background_image2.JPG",
        "Background/Background_image3.JPG",
        "Background/Background_image4.JPG"
    ];

    const slide1 = document.querySelector(".slide1");
    const slide2 = document.querySelector(".slide2");

    let currentIndex = 0;
    let isSlide2Visible = false;

    if (slide1 && slide2) {
        /* PRELOAD IMAGES */
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        /* SET FIRST IMAGE */
        slide1.style.backgroundImage = `url(${images[currentIndex]})`;

        function changeSlide() {
            currentIndex = (currentIndex + 1) % images.length;

            if (!isSlide2Visible) {
                slide2.style.backgroundImage = `url(${images[currentIndex]})`;
                slide2.style.opacity = "1";
            } else {
                slide1.style.backgroundImage = `url(${images[currentIndex]})`;
                slide2.style.opacity = "0";
            }
            isSlide2Visible = !isSlide2Visible;
        }

        // Change background every 5 seconds
        setInterval(changeSlide, 5000);
    }

    /* =========================================
       PART 2: SPEAKERS CAROUSEL (MANUAL ONLY)
       ========================================= */
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (track && nextBtn && prevBtn) {
        const slides = Array.from(track.children);
        let speakerIndex = 0;
        const totalSpeakers = slides.length;

        function updateCarousel() {
            track.style.transform = 'translateX(-' + (speakerIndex * 100) + '%)';
        }

        nextBtn.addEventListener('click', () => {
            speakerIndex = (speakerIndex + 1) % totalSpeakers;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            speakerIndex = (speakerIndex - 1 + totalSpeakers) % totalSpeakers;
            updateCarousel();
        });
    }
});