
function fadeIn(object) {

    let obj = document.querySelector(object);

    // let obj = document.querySelector("#chart");
    obj.style.opacity = 0;

    const observerOptions = {
        root: null,
        threshold: 0.0,
        rootMargin: "-10%",
    };

    document.addEventListener("scroll", function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const opacity = entry.intersectionRatio;

                // Update the opacity of the image
                obj.style.opacity = opacity.toFixed(2); // Limit to 2 decimal places
            });
        }, observerOptions);

        observer.observe(obj);
    });

}
