// Option 2 - jQuery Smooth Scroll
// $('.navbar a').on('click', function(e) {
//     // console.log(this.hash);
//     if(this.hash !== ''){
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800);
//     }
// });

// Option 3 - smooth scroll using polyfills 
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});