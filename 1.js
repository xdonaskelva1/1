document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.mybbImage');
    images.forEach(function(image) {
        var aspectRatio = image.naturalWidth / image.naturalHeight;
        if (aspectRatio < 1) { // Assuming vertical image if width is less than height
            image.classList.add('verticalImage');
        }
    });
});
