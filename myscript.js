$(document).ready(function() {
    var player1 = prompt("Player one: Enter Your Name, you will be blue");
    var playerColor = 'rgb(86, 151, 255)';

    var player2 = prompt("Player Two: Enter Your name, you will be Red");
    var player2Color = 'rgb(247, 45, 73)';

    var currentPlayer = 1;
    var currentName = player1;
    var currentColor = playerColor;

    var game_on = true;
    var table = $('table tr');

    function reportWin(rowNum, colNum) {
        console.log("You won starting at this row, col");
        console.log(rowNum);
        console.log(colNum);
        console.log(currentName + " wins!");
        game_on = false;
    }

    function changeColor(rowIndex, colIndex, color) {
        return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
    }

    function returnColor(rowIndex, colIndex) {
        return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
    }

    function checkButton(colIndex) {
        for (var row = 5; row >= 0; row--) {
            if (returnColor(row, colIndex) === 'rgb(128, 128, 128)') {
                return row;
            }
        }
        return -1; // Column is full
    }

    function colorMatchCheck(one, two, three, four) {
        return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
    }

    function checkWin(rowNum, colNum) {
        // Check for horizontal, vertical, and diagonal wins
        if (horizontalWinCheck(rowNum, colNum) || verticalWinCheck(rowNum, colNum) || diagonalWinCheck(rowNum, colNum)) {
            reportWin(rowNum, colNum);
        }
    }

    function horizontalWinCheck(rowNum, colNum) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(rowNum, col), returnColor(rowNum, col + 1), returnColor(rowNum, col + 2), returnColor(rowNum, col + 3))) {
                return true;
            }
        }
        return false;
    }

    function verticalWinCheck(rowNum, colNum) {
        for (var row = 0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row, colNum), returnColor(row + 1, colNum), returnColor(row + 2, colNum), returnColor(row + 3, colNum))) {
                return true;
            }
        }
        return false;
    }

    function diagonalWinCheck(rowNum, colNum) {
        // Check for diagonal wins
        // Diagonal from top-left to bottom-right
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 4; col++) {
                if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
                    return true;
                }
            }
        }

        // Diagonal from top-right to bottom-left
        for (var row = 0; row < 3; row++) {
            for (var col = 6; col > 2; col--) {
                if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col - 1), returnColor(row + 2, col - 2), returnColor(row + 3, col - 3))) {
                    return true;
                }
            }
        }

        return false;
    }

    // Event handler for button clicks
    $('table tr td button').on('click', function() {
        if (!game_on) return; // Stop accepting clicks if game is over

        var colIndex = $(this).closest('td').index(); // Get the column index of the clicked button
        var rowIndex = checkButton(colIndex); // Get the correct row index based on the column

        if (rowIndex !== -1) {
            changeColor(rowIndex, colIndex, currentColor); // Color the cell at the determined row index and column index
            checkWin(rowIndex, colIndex); // Check for a win after coloring the cell

            // Switch players after each move
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            currentName = currentPlayer === 1 ? player1 : player2;
            currentColor = currentPlayer === 1 ? playerColor : player2Color;
        } else {
            console.log("Column is full. Please choose another column.");
        }
    });
});
