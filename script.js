const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderElement = document.getElementById("slider");

images.forEach(function(currentImage) {
    sliderElement.innerHTML += `    
    <section class="slide">
    <img src="./${currentImage.image}">
        <div class="details">
            <h1 class="title">
                ${currentImage.title}
            </h1>
            <div class="text">
                ${currentImage.text}
            </div>
        </div>
    </section>
    `;
}); 

document.querySelector(".slide:nth-of-type(1)").classList.add("active");

let slideNumber = 1;

document.querySelector("#up-arrow").addEventListener("click", function() {

    if (slideNumber < images.length) {

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber++;

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

    } else {

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber = 1;

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");
    }
});

document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber--;

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");

    } else {

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber = images.length;

        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.add("active");
    }
});

const thumbnailsElement = document.getElementById("thumbnails");

images.forEach(function(currentImage, index) {

    const thumbnail = document.createElement("img");
    
    thumbnail.src = currentImage.image;

    thumbnail.classList.add("thumbnail");

    thumbnail.setAttribute("data-index", index);

    thumbnailsElement.append(thumbnail);
});

thumbnailsElement.addEventListener("click", function(click) {

    if (click.target.classList.contains("thumbnail")) {

        const index = parseInt(click.target.getAttribute("data-index"));

        document.querySelector("#slider .slide.active").classList.remove("active");

        document.querySelector(`#slider .slide:nth-of-type(${index + 1})`).classList.add("active");
    }
});

let interval;
let revert = false;

document.querySelector("#start-slideshow").addEventListener("click", function() {

    interval = setInterval(changeSlide, 3000);
});

document.querySelector("#revert-slideshow").addEventListener("click", function() {

    revert = !revert;
});

document.querySelector("#stop-slideshow").addEventListener("click", function() {

    clearInterval(interval);
});

function changeSlide() {
    if (!revert) {

        document.querySelector("#up-arrow").click();
    } else {

        document.querySelector("#down-arrow").click();
    }
}