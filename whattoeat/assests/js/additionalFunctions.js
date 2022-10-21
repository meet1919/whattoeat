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

document.addEventListener('load', fadeOutEffect);


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