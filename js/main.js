// let slidePosition = 1;
// slideShow(slidePosition);

// document.querySelector('.forwards').addEventListener('click', plusSlides(1));
// document.querySelector('.backwards').addEventListener('click', plusSlides(-1));

// function plusSlides(n) {
//     slideShow(slidePosition += n)
// }

// function currentSlide(n) {
//     slideShow(slidePosition = n)
// }

// function slideShow(n) {
//     let i;
//     let slides = document.querySelectorAll('.carPhoto');
//     if(n > slides.length) {slidePosition = 1};
//     if(n < 1) {slidePosition = slides.length};
//     for(i = 0; i < slides.length; i++) {
//         slides[i].classList.add('hidden');
//     }
//     slides[slidePosition-1].classList.remove('hidden');
// }