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

    if (slide1 && slide2) {
        let currentIndex = 0;
        let isSlide2Visible = false;

        // Preload
        images.forEach(src => { const img = new Image(); img.src = src; });
        slide1.style.backgroundImage = `url(${images[currentIndex]})`;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            if (!isSlide2Visible) {
                slide2.style.backgroundImage = `url(${images[currentIndex]})`;
                slide2.style.opacity = "1";
            } else {
                slide1.style.backgroundImage = `url(${images[currentIndex]})`;
                slide2.style.opacity = "0";
            }
            isSlide2Visible = !isSlide2Visible;
        }, 5000);
    }

    /* =========================================
       PART 2: ACTIVE LINK ON SCROLL (FIXED)
       ========================================= */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function highlightNavLink() {
        let scrollY = window.scrollY;

        // FIX: Force Home link active if at the very top
        if (scrollY < 100) {
            navLinks.forEach(link => link.classList.remove("active"));
            // Select the link that points to #home
            const homeLink = document.querySelector("nav a[href='#home']");
            if (homeLink) homeLink.classList.add("active");
            return; 
        }

        // Check other sections
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; 
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                // Matches href="#about", href="#speakers", etc.
                const activeLink = document.querySelector("nav a[href*=" + sectionId + "]");
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Run on load
});