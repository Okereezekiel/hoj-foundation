document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = textElement.innerHTML;
    let index = 0;
    let isDeleting = false;
    
    function type() {
        textElement.innerHTML = text.substring(0, index) + '<span class="cursor"></span>';

        if (isDeleting) {
            if (index > 0) {
                index--;
            } else {
                isDeleting = false;
            }
        } else {
            if (index < text.length) {
                index++;
            } else {
                isDeleting = true;
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
});
