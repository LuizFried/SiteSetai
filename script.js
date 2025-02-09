document.addEventListener('DOMContentLoaded', function() {
    
    var modal = document.getElementById("videoModal");
    var btn = document.getElementById("image__recrut");
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.querySelector(".modal-content iframe");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        stopVideo(iframe);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            stopVideo(iframe);
        }
    }

    function stopVideo(iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
});