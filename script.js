const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
console.log(images);

const sliderElement = document.getElementById("slider");

for (let i = 0; i < images.length; i++) {

    sliderElement.innerHTML += `<img src="./img/0${i + 1}.webp" alt="immagine ${i + 1}">`;
}

document.querySelector("#slider img:nth-of-type(1)").className = "active";

let slideNumber = 1;

document.querySelector("#up-arrow").addEventListener("click", function() {

    if (slideNumber < images.length) {

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber++;

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber = 1;

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
    }
});

document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
 
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber--;

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

        slideNumber = images.length;

        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
    }
});