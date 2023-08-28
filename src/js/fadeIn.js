
function fadeIn(object) {

    let obj = document.querySelector(object);

    // let obj = document.querySelector("#chart");
    obj.style.opacity = 0;

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "-15%",
    };

    document.addEventListener("scroll", function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const opacity = entry.intersectionRatio * 1.3;

                // Update the opacity of the image
                obj.style.opacity = opacity.toFixed(2); // Limit to 2 decimal places
            });
        }, observerOptions);

        observer.observe(obj);
    }, { passive: true} );

}
