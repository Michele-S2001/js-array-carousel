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
const thumbnailsDomElement = document.querySelector('.thumbnails');

// creiamo tutti gli elementi html con un loop
for (let i = 0; i < images.length; i++) {
  let currentImage = images[i];
  //creiamo gli elementi immagin per carosello e thumbnails
  const imgDomElement = document.createElement("img");
  imgDomElement.classList.add('image');
  const thumbnailDomElement = document.createElement("img");
  thumbnailDomElement.classList.add('thumbnail');
  //aggiungiamo l'url
  imgDomElement.src = `${currentImage}`;
  thumbnailDomElement.src = `${currentImage}`;
  //aggiungo l'elemento img all'interno del carousel
  carouselDomElement.append(imgDomElement);
  thumbnailsDomElement.append(thumbnailDomElement);
}

//creo un indice per selezionare le immagini 
let imgIndex = 0;
let imgMaxIndex = images.length - 1;

const carouselImages = carouselDomElement.querySelectorAll('.image');
const thumbnailsImages = thumbnailsDomElement.querySelectorAll('.thumbnail');

carouselImages[imgIndex].classList.add('show');
thumbnailsImages[imgIndex].classList.add('active');

//catturo il click sulle frecce
arrowRightDomElement.addEventListener('click', function () {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsImages[imgIndex].classList.remove('active');
  if (imgIndex === imgMaxIndex) {
    imgIndex = 0;
  } else {
    ++imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsImages[imgIndex].classList.add('active');
})

arrowLeftDomElement.addEventListener('click', function () {
  carouselImages[imgIndex].classList.remove('show');
  thumbnailsImages[imgIndex].classList.remove('active');
  if (imgIndex === 0) {
    imgIndex = imgMaxIndex;
  } else {
    --imgIndex;
  }
  carouselImages[imgIndex].classList.add('show');
  thumbnailsImages[imgIndex].classList.add('active');
})
