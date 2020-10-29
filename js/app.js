import "./sign.js";

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


// (function ($, document, window) {
//   $(document).ready(function () {
//     // Cloning main navigation for mobile menu
//     $(".mobile-navigation").append($(".main-navigation .menu").clone());

//     // Mobile menu toggle
//     $(".menu-toggle").click(function () {
//       $(".mobile-navigation").slideToggle();
//     });

//     var map = $(".map");
//     var latitude = map.data("latitude");
//     var longitude = map.data("longitude");
//     if (map.length) {
//       map.gmap3({
//         map: {
//           options: {
//             center: [latitude, longitude],
//             zoom: 15,
//             scrollwheel: false,
//           },
//         },
//         marker: {
//           latLng: [latitude, longitude],
//         },
//       });
//     }
//   });

//   $(window).load(function () {});
// })(jQuery, document, window);
