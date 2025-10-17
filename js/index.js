"use strict";

window.addEventListener("DOMContentLoaded",
    function () {
        const items = document.querySelectorAll(".item"); // Không cần 'this.document'
        items.forEach(function (element, index) {
            setTimeout(function () {
                element.classList.add("fade-in");
            }, 200 * index);
        });
    }, false
);
