// Spinner (Loading screen)
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show')
        }
    }, 1)
};

spinner()





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