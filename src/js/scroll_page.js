const scrollBtn = document.querySelector("[data-scroll-page]");

    document.addEventListener("scroll", () => {
        if (document.body.clientWidth>=650 && window.scrollY > 500) {
            scrollBtn.style.visibility = "visible";
        } else {
            scrollBtn.style.visibility = "hidden";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0
        });
    });
    