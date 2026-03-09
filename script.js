window.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) {
        console.warn('No <form> element found.');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    form.addEventListener('reset', function () {
        alert('Form reset!');
    });
});

