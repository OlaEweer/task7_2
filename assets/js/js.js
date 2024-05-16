
var task1 = document.querySelector('.task1');
var image = document.querySelector('.image');
var createImage = document.querySelector('.createImage');
let createdImage = document.createElement("img")

var image1 = document.querySelector('.image1');
image1.addEventListener('click', function() {
    task1.style.backgroundColor = "green"
    image.style.display = "none"
    createdImage.src = "./assets/img/image1.jpeg"
    createImage.appendChild(createdImage)
});

var image2 = document.querySelector('.image2');
image2.addEventListener('click', function() {
    task1.style.backgroundColor = "#4a4947"
    image.style.display = "none"
    createdImage.src = "./assets/img/image2.jpeg"
    createImage.appendChild(createdImage)
});

var image3 = document.querySelector('.image3');
image3.addEventListener('click', function() {
    task1.style.backgroundColor = "#92a9c3"
    image.style.display = "none"
    createdImage.src = "./assets/img/image3.jpeg"
    createImage.appendChild(createdImage)
});


var image4 = document.querySelector('.image4');
image4.addEventListener('click', function() {
    task1.style.backgroundColor = "#eaebe7"
    image.style.display = "none"
    createdImage.src = "./assets/img/image4.jpeg"
    createImage.appendChild(createdImage)
});


var image5 = document.querySelector('.image5');
image5.addEventListener('click', function() {
    task1.style.backgroundColor = "#ebdbc4"
    image.style.display = "none"
    createdImage.src = "./assets/img/image5.jpeg"
    createImage.appendChild(createdImage)
});


//////////////////////
var task2 = document.querySelector('.task2');
var moon = document.querySelector('.moon');
var sun = document.querySelector('.sun');


moon.addEventListener('click', function() {
    moon.style.display = "none"
    sun.style.display = "block"
    task2.style.backgroundColor = "gray"

});

sun.addEventListener('click', function() {
    sun.style.display = "none"
    moon.style.display = "block"
    task2.style.backgroundColor = "white"

});
///////////////
var up = document.querySelector('.up');
var down = document.querySelector('.down');
document.querySelector('.accordion').addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-angle-down')) {
        var item = event.target.closest('.accordion-item');
        var content = item.querySelector('.accordion-content');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            up.style.display = 'none';
            down.style.display = 'block';


        } else {
            content.style.display = 'block';
            up.style.display = 'block';
            down.style.display = 'none';
        }
    }
    if (event.target.classList.contains('fa-angle-up')) {
        var item = event.target.closest('.accordion-item');
        var content = item.querySelector('.accordion-content');

        if (content.style.display === 'none') {
            content.style.display = 'block';
            up.style.display = 'block';
            down.style.display = 'none';


        } else {
            content.style.display = 'none';
            up.style.display = 'none';
            down.style.display = 'block';
        }
    }
});








///////////////////

var task4 = document.querySelector('.task4');
var star1 = document.querySelector('.star1');
var star2 = document.querySelector('.star2');
var star3 = document.querySelector('.star3');
var star4 = document.querySelector('.star4');
var star5 = document.querySelector('.star5');
var star5 = document.querySelector('.star5');

let createdElement = document.createElement("h3")

star1.addEventListener('click', function() {
    star1.style.color = "#FFD43B"
    createdElement.innerHTML = "it is bad"
    createdElement.style.textAlign = "center"
    task4.appendChild(createdElement)

});

star2.addEventListener('click', function() {
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    createdElement.innerHTML = "it is good"
    createdElement.style.textAlign = "center"
    task4.appendChild(createdElement)

});
star3.addEventListener('click', function() {
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    createdElement.innerHTML = "it is awesome"
    createdElement.style.textAlign = "center"
    task4.appendChild(createdElement)

});
star4.addEventListener('click', function() {
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    star4.style.color = "#FFD43B"
    createdElement.innerHTML = "it is very good"
    createdElement.style.textAlign = "center"
    task4.appendChild(createdElement)

});
star5.addEventListener('click', function() {
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    star4.style.color = "#FFD43B"
    star5.style.color = "#FFD43B"
    createdElement.innerHTML = "it is excellent"
    createdElement.style.textAlign = "center"
    task4.appendChild(createdElement)

});
///////////////////////