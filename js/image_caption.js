document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    document.querySelectorAll('.gallery-icon a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            modal.style.display = "block";
            modalImg.src = item.href;
            captionText.innerHTML = item.querySelector('img').alt;
        });
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
});
