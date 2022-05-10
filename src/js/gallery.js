const galleryItems = document.getElementById('jsGalleryGrid').querySelectorAll('.gallery__item');
    for (let item of galleryItems) {
        item.onmouseenter = item.onmouseleave = handler;
    }

    function handler(event) {
        for (let item of galleryItems) {
            if (item != event.target)
                item.style.opacity = (event.type == "mouseenter") ? '.75' : '1';
        }
    }