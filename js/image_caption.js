document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    document.querySelectorAll('.gallery-icon a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            modal.style.display = "block";
            modalImg.src = item.href;

            // Get data attributes from the image
            var img = item.querySelector('img');
            var imgName = img.getAttribute('data-name');
            var imgSize = img.getAttribute('data-size');
            var imgMedium = img.getAttribute('data-medium');
            var imgPrice = img.getAttribute('data-price');

            // Set the caption content with different fonts
            captionText.innerHTML = `
                <span class='img-name'>Name: ${imgName}</span><br>
                <span class='img-size'>Size: ${imgSize}</span><br>
                <span class='img-medium'>Medium: ${imgMedium}</span><br>
                <span class='img-price'>Price: ${imgPrice}</span>
            `;
        });
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});