document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    document.querySelectorAll('.gallery-icon a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            modal.style.display = "block";
            modalImg.src = item.href;

            // Get the content from the figcaption
            var figcaptionContent = item.closest('figure').querySelector('.gallery-caption .entry-summary').innerHTML;

            // Set the caption content with the figcaption HTML
            captionText.innerHTML = figcaptionContent;
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
