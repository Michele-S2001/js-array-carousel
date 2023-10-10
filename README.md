# Dato un array contenente una lista di cinque immagini, creare un carosello

- immagazziniamo tutti gli url delle immagini in un array come stringhe
- recupero gli elementi dal DOM
  - recupero il carousel
  - recupero le due frecce
- creiamo tutti gli elementi html con un loop
  - prendere ogni elemento dell'array con le img tramite l'indice
  - creo un elemento che racchiuda nell'attributo src dell'immagine l'url corrente
  - vado a concatenare questi elementi nell'elemento carousel