document.addEventListener("DOMContentLoaded", function () {

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

    setInterval(changeSlide, 5000);

});
