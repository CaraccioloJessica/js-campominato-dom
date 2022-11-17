// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// VARIABILE CONTAINER
const contenitore = document.getElementById('container');
// console.log(contenitore);

// BOTTONE PER GENERARE GRIGLIA
const button = document.getElementById('btn');

button.addEventListener('click',
  function () {
    // RESET DELLA GRIGLIA AL CLICK
    contenitore.innerHTML = '';
    // RESET CONSOLE QUANDO SI GENERA NUOVA GRIGLIA
    console.clear();

    // LOOP PER CREARE 100 CELLE
    for (let i = 0; i < 100; i++){
      let nuovoElemento = creaSquare();

      // NUMERI DA 1 A 100 DENTRO CELLE
      nuovoElemento.append([i + 1]);

      // AL CLICK AGGIUNGO CLASSE PER CAMBIARE COLORE ALLA CELLA
      nuovoElemento.addEventListener('click',
        function () {
          nuovoElemento.classList.add('square-click');

          // IN CONSOLE VISUALIZZO NUMERO CLICCATO
          console.log('Hai cliccato la cella:', i + 1);
        }
      )

      // METTO L'ELEMENTO NEL CONTAINER
      contenitore.appendChild(nuovoElemento);
    }
  }
)

// FUNZIONE PER CREARE DIV
function creaSquare() {
  const elemento = document.createElement('div');
  elemento.classList.add('square');

  // console.log(elemento);
  return elemento;
}
