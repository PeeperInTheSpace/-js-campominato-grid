console.log("JS Ok!")

/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. Inoltre emette un messaggio in console con il numero della cella cliccata.

*/

const gridButton = document.getElementById("gridgenerator");

gridButton.addEventListener("click", function() {

    console.log("click");
    const grid = document.getElementById("gridDom");
    grid.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        const gridCell = document.createElement("div");
        gridCell.innerHTML = i;
        gridCell.className = "gridCell";
        grid.append(gridCell);

        console.log(i);

        gridCell.addEventListener("click", function() {

            console.log("click");

            const isEven = checkIsEven(i);

            if (isEven) {

                gridCell.classList.add("evenbox");

            } else {

                gridCell.classList.add("oddbox");

            }

        });

    }


    }

);

function checkIsEven(number) {

    return number % 2 === 0;

}


