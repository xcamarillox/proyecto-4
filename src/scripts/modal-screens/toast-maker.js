import Toastify from 'toastify-js'

export const makeAToast = (mode, text) => {
    let bgColor;
    if (mode === 'd') bgColor = "#d9534f" //danger
    else if (mode === 'w') bgColor = "#f0ad4e" //warning
    else if (mode === 's') bgColor = "#5cb85c" //success
    else bgColor = "#5bc0de" //info
    Toastify({
        text,
        duration: 7000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        }
    }).showToast();
}