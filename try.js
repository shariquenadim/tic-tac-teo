function makeComputerMove() {
    if (gameOver) {
        return false;
    }

    // Determine delay based on whether there's a winning move
    let delay;
    if (moves >= 3 && myGrid.getFirstWithTwoInARow(computer) !== false) {
        delay = getRandomDelay(500, 1000); // Quick response if there's a winning move
    } else {
        delay = getRandomDelay(); // Random delay otherwise
    }

    // Execute the move with the determined delay
    setTimeout(() => {
        var cell = -1,
            myArr = [],
            corners = [0, 2, 6, 8];

        if (moves >= 3) {
            cell = myGrid.getFirstWithTwoInARow(computer);
            if (cell === false) {
                cell = myGrid.getFirstWithTwoInARow(player);
            }
            if (cell === false) {
                if (myGrid.cells[4] === 0 && difficulty == 1) {
                    cell = 4;
                } else {
                    myArr = myGrid.getFreeCellIndices();
                    cell = myArr[intRandom(0, myArr.length - 1)];
                }
            }

            // Avoid a catch-22 situation
            if (moves == 3 && myGrid.cells[4] == computer && player == x && difficulty == 1) {
                if (myGrid.cells[7] == player && (myGrid.cells[0] == player || myGrid.cells[2] == player)) {
                    myArr = [6, 8];
                    cell = myArr[intRandom(0, 1)];
                }
                // Additional conditions you have remain unchanged here...

            } else if (moves === 1 && myGrid.cells[4] == player && difficulty == 1) {
                cell = corners[intRandom(0, 3)];
            } else if (moves === 2 && myGrid.cells[4] == player && computer == x && difficulty == 1) {
                if (myGrid.cells[0] == computer) {
                    cell = 8;
                } else if (myGrid.cells[2] == computer) {
                    cell = 6;
                } else if (myGrid.cells[6] == computer) {
                    cell = 2;
                } else if (myGrid.cells[8] == computer) {
                    cell = 0;
                }
            } else if (moves === 0 && intRandom(1, 10) < 8) {
                cell = corners[intRandom(0, 3)];
            } else {
                if (myGrid.cells[4] === 0 && difficulty == 1) {
                    cell = 4;
                } else {
                    myArr = myGrid.getFreeCellIndices();
                    cell = myArr[intRandom(0, myArr.length - 1)];
                }
            }
        }

        var id = "cell" + cell.toString();
        document.getElementById(id).innerHTML = computerText;
        document.getElementById(id).style.cursor = "default";

        var rand = Math.random();
        if (rand < 0.3) {
            document.getElementById(id).style.transform = "rotate(180deg)";
        } else if (rand > 0.6) {
            document.getElementById(id).style.transform = "rotate(90deg)";
        }

        myGrid.cells[cell] = computer;
        moves += 1;
        if (moves >= 5) {
            winner = checkWin();
        }
        if (winner === 0 && !gameOver) {
            whoseTurn = player;
        }
    }, delay);
}
