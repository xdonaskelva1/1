window.onload = function() {
    var images = document.querySelectorAll('.custom-post-content img');
    images.forEach(function(img) {
        // Ensure the image is loaded before getting its dimensions
        if (img.complete) {
            addImageClassBasedOnOrientation(img);
        } else {
            img.onload = function() {
                addImageClassBasedOnOrientation(img);
            };
        }
    });
};

function addImageClassBasedOnOrientation(img) {
    if (img.naturalHeight > img.naturalWidth) {
        // The image is vertical
        img.classList.add("vertical-image");
    } else {
        // The image is horizontal
        img.classList.add("horizontal-image");
    }
}
