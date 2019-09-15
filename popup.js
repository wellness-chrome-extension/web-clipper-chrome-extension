document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        document.getElementById("link").style.fontWeight = 'bold';
    });
});