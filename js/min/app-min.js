// (function ($, document, window) {

//     $(document).ready(function () {

//         // Cloning main navigation for mobile menu
//         $(".mobile-navigation").append($(".main-navigation .menu").clone());

//         // Mobile menu toggle 
//         $(".menu-toggle").click(function () {
//             $(".mobile-navigation").slideToggle();
//         });

//         var map = $(".map");
//         var latitude = map.data("latitude");
//         var longitude = map.data("longitude");
//         if (map.length) {

//             map.gmap3({
//                 map: {
//                     options: {
//                         center: [latitude, longitude],
//                         zoom: 15,
//                         scrollwheel: false
//                     }
//                 },
//                 marker: {
//                     latLng: [latitude, longitude],
//                 }
//             });

//         }
//     });

//     $(window).on('load', function () {

//     });

// })(jQuery, document, window);


function showResults() {
    var results = document.querySelector('#results')
    results.classList.remove('d-none')
    // results.style.display = 'block!important'
    // console.log('success')
    // console.log(results)
}
function hideResults(){
    var results = document.querySelector('#results')
    results.classList.add('d-none')
    
}