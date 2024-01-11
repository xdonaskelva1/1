window.onload = function() {
    var images = document.querySelectorAll('.custom-post-content img');
    images.forEach(function(img) {
        img.onload = function() {
            if (this.naturalHeight > this.naturalWidth) {
                img.classList.add("vertical-image");
            } else {
                img.classList.add("horizontal-image");
            }
        };
    });

    // Clear floats after every three vertical images
    var verticalImages = document.querySelectorAll('.custom-post-content img.vertical-image');
    verticalImages.forEach(function(img, index) {
        if ((index + 1) % 3 === 0) {
            var clearDiv = document.createElement('div');
            clearDiv.style.clear = 'both';
            img.parentNode.insertBefore(clearDiv, img.nextSibling);
        }
    });
};
