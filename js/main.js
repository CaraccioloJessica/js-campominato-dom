// Il computer deve generare 16 numeri casuali (bombe)nello stesso range della difficoltà prescelta. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l’utente clicca su una cella:se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// VARIABILE CONTAINER
const contenitore = document.getElementById('container');
const text = document.getElementById('text');
let punteggio;

// RICHIAMO FUNZIONE PER NUMERI RANDOM
const arrRandom = generaBombe();
//console.log(arrRandom);

// BOTTONE PER GENERARE GRIGLIA
const button = document.getElementById('btn');
button.addEventListener('click',
  function () {
    punteggio = 0;
    // RESET DELLA GRIGLIA AL CLICK
    contenitore.innerHTML = '';
    text.innerHTML = '';
    // RESET CONSOLE QUANDO SI GENERA NUOVA GRIGLIA
    console.clear();
    console.log(arrRandom);

    // LOOP PER CREARE 100 CELLE
    for (let i = 1; i <= 100; i++){
      let nuovoElemento = creaSquare();

      // NUMERI DA 1 A 100 DENTRO CELLE
      nuovoElemento.append([i]);

      // AL CLICK AGGIUNGO CLASSE PER CAMBIARE COLORE ALLA CELLA
      nuovoElemento.addEventListener('click',
        function () {     
               
          // SE IL NUMERO E' UNA BOMBA, DIVENTA ROSSO
          if(arrRandom.includes(i)){
            // aggiungi classe bomb (colore rosso)
            nuovoElemento.classList.add('bomb');
            // prendi i click sulle celle azzurre
            let punti = document.getElementsByClassName('square-click').length;
            // quando perdi, visualizza i click totali alle celle azzurre come punti
            text.innerHTML = `Hai perso! Il tuo punteggio è di ${punti}`
            // console.log('Hai perso! Il tuo punteggio è', `${punti}`);
          }


          // SE NO SI COLORA DI AZZURRO
          else{
            nuovoElemento.classList.add('square-click');
            // IN CONSOLE VISUALIZZO NUMERO CLICCATO
            // console.log('Hai cliccato la cella:', i);

            // se prendi tutte le celle azzurre, hai vinto
            punteggio ++;
            if(punteggio == 84){
              text.style.color = "#8ECC39";
              text.innerHTML = `Complimenti, Il tuo punteggio è di ${punteggio}`
            }
          }
        }
      )

      // METTO L'ELEMENTO NEL CONTAINER
      contenitore.appendChild(nuovoElemento);
    }
  }
)

// FUNZIONI-------------------------------------------
// FUNZIONE PER CREARE DIV
function creaSquare() {
  const elemento = document.createElement('div');
  elemento.classList.add('square');

  // console.log(elemento);
  return elemento;
}

// FUNZIONE NUMERI RANDOM
function generaBombe(){
    let rangeNum = function(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    let numRandom = [];
    while(numRandom.length < 16){
      let random = rangeNum(1, 100);
      if(!numRandom.includes(random)){
        numRandom.push(random);
      }
    }
    return numRandom;
}