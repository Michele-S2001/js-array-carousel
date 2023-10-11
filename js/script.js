// ->->-> CAROUSEL <-<-<-
console.log('sono collegato');
// creo un array che racchiuda gli url delle immagini
const images = [
  "./img/img-dinamic/01.webp",
  "./img/img-dinamic/02.webp",
  "./img/img-dinamic/03.webp",
  "./img/img-dinamic/04.webp",
  "./img/img-dinamic/05.webp"
];

// recupero gli elementi necessari dal DOM
const carouselDomElement = document.getElementById('carousel');
const arrowLeftDomElement = document.querySelector('.arrow-left');
const arrowRightDomElement = document.querySelector('.arrow-right');

let imgDomElement;

// creiamo tutti gli elementi html con un loop
for (let i = 0; i < images.length; i++) {
  let currentImage = images[i];
  //creiamo l'elemento img
  imgDomElement = document.createElement("img");
  imgDomElement.classList.add('image');
  //aggiungo url
  imgDomElement.src = `${currentImage}`;
  //aggiungo l'elemento img all'interno del carousel
  carouselDomElement.append(imgDomElement);
}

//creo un indice per selezionare le immagini 
let imgIndex = 0;
let imgMaxIndex = images.length - 1;

const carouselImages = carouselDomElement.querySelectorAll('.image');

carouselImages[imgIndex].classList.add('show');

//catturo il click sulle frecce
arrowRightDomElement.addEventListener('click', function () {
  carouselImages[imgIndex].classList.remove('show');
  if (imgIndex === imgMaxIndex) {
    imgIndex = 0;
  } else {
    ++imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
})

arrowLeftDomElement.addEventListener('click', function () {
  carouselImages[imgIndex].classList.remove('show');
  if (imgIndex === 0) {
    imgIndex = imgMaxIndex;
  } else {
    --imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
})
