
const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')
const dots = document.querySelectorAll(".dot");
const bannerText = banner.querySelector("p");
const bannerSlide = document.getElementById("banner-slide");
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0; 
updateActiveDot()


/* Functions */

function updateActiveDot() {
	dots.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		}
	});
}



function showNextSlide() {
	currentSlide = (currentSlide + 1) % slides.length; 
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();

}
function showPreviousSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot();
}

/* EventListener Flêche */

leftArrow.addEventListener('click', showPreviousSlide)
rightArrow.addEventListener('click', showNextSlide)
