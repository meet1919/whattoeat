// Below is the code, when groceries list page is open the button will be highlighted
$(document).ready(function () {
    var curr_url = location.href
    if (curr_url.includes('groceries-list')) {
        $('#gl-btn').css({
            'color': 'white',
            'background-color': '#3EC3A4',
            'border': '0.1em solid #3EC3A4'
        })
    }
})



$(document).ready(function () {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});



// Preloader
const preloader = document.querySelector('.preloader');
const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.5;
    } else {
        clearInterval(fadeOutEffect);
        $('.preloader').hide()
    }
}, 200);

window.addEventListener('load', fadeOutEffect);





// // For toggling light and dark mode --------------------------------------------------------
// var nightModeConfig = {
//     body: '#ffffff', // Default: #282828
//     texts: '#000000', // Default: #f5f5f5
//     inputs: {
//         color: '#000000', // Default: #f5f5f5
//         backgroundColor: '#ffffff', // Default #313131
//     },
//     buttons: {
//         color: "#000000", // Default: #f5f5f5
//         backgroundColor: "#ffffff", // #757575
//     },
//     links: 'links color (normal state)', // Default: #009688
//     classes: [
//         // Classes to apply when enabling the dark mode on certain elements
//         {
//             apply: 'my-selected-class', // just the class name (without the .)
//             to: '.my-dark-class-to-the-selected-class .some-nested-class', // uses querySelectorAll
//         },
//         {
//             apply: 'another-selected-class',
//             to:
//                 '.another-dark-class-to-the-selected-class.some-class .some-nested-class',
//         },
//     ],
// };
// var Nightly = new Nightly();
// document.getElementById("btn").addEventListener("click", function () {
//     Nightly.toggle();
// });