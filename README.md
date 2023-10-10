# Dato un array contenente una lista di cinque immagini, creare un carosello

- immagazziniamo tutti gli url delle immagini in un array come stringhe
- recupero gli elementi dal DOM
  - recupero il carousel
  - recupero le due frecce
- creiamo tutti gli elementi html con un loop
  - prendere ogni elemento dell'array con le img tramite l'indice e immagazzinarlo in una variabile
  - creo un elemento che racchiuda nell'attributo src dell'immagine l'url corrente
  - vado a concatenare questi elementi nell'elemento carousel
- dare ad un immagine la classe show per renderla visibile
  - inizializzo una variabile "imgIndex" con valore 0 in modo tale da poterlo incrementare
  - dichiaro una variabile che abbiamo al suo interno un selettore che prenda tutti gli elementi con la classe "image"
  - con una variabile che chiamo "selectedImg" prendo il primo elemento delle .image con l'aiuto dell'indice e gli dò la classe "show"
- fare in modo che al click della freccia a destra possa scorrere le immagini
  - al click alla "selectedImg" viene rimossa la classe show
  - viene incrementato il valore dell'indice
  - inizializzo nuovamente la variabile "selectedImg" aggiungendo la    classe "show"


  