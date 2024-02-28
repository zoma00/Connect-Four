document.addEventListener("DOMContentLoaded", function() {
    var player1 = prompt("Player one: Enter Your Name, you will be blue");
    var playerColor = 'rgb(86, 151, 255)';

    var player2 = prompt("Player Two: Enter Your name, you will be Red");
    var player2Color = 'rgb(247, 45, 73)';

    var currentPlayer = 1;
    var currentName = player1;
    var currentColor = playerColor;

    var game_on = true;
    var table = document.querySelectorAll('table tr');

    function reportWin(rowNum, colNum) {
        console.log("You won starting at this row, col");
        console.log(rowNum);
        console.log(colNum);
        console.log(currentName + " wins!");
        game_on = false;
    }

    function changeColor(rowIndex, colIndex, color) {
        table[rowIndex].querySelectorAll('td')[colIndex].querySelector('button').style.backgroundColor = color;
    }

    function returnColor(rowIndex, colIndex) {
        return table[rowIndex].querySelectorAll('td')[colIndex].querySelector('button').style.backgroundColor;
    }

    function checkButton(colIndex) {
        for (var row = 5; row >= 0; row--) {
            if (returnColor(row, colIndex) === 'rgb(128, 128, 128)' || returnColor(row, colIndex) === '') {
                return row;
            }
        }
        return -1; // Column is full
    }

    function colorMatchCheck(one, two, three, four) {
        return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== '');
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
    document.querySelectorAll('table tr td button').forEach(function(button) {
        button.addEventListener('click', function() {
            if (!game_on) return; // Stop accepting clicks if game is over

            var colIndex = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
            var rowIndex = checkButton(colIndex);

            if (rowIndex !== -1) {
                changeColor(rowIndex, colIndex, currentColor);
                checkWin(rowIndex, colIndex);

                currentPlayer = currentPlayer === 1 ? 2 : 1;
                currentName = currentPlayer === 1 ? player1 : player2;
                currentColor = currentPlayer === 1 ? playerColor : player2Color;
            } else {
                console.log("Column is full. Please choose another column.");
            }
        });
    });
});



/*
The main differences between your original jQuery code and the simplified vanilla JavaScript code provided are as follows:

1. **Event Listener Registration**:
    - jQuery Code: Uses `$(document).ready(function() { ... });` to ensure that the code inside the function runs when the DOM is fully loaded.
    - Vanilla JavaScript Code: Uses `document.addEventListener("DOMContentLoaded", function() { ... });` to achieve the same effect, listening for the DOMContentLoaded event.

2. **DOM Selection and Manipulation**:
    - jQuery Code: Utilizes jQuery selectors and methods like `$('table tr')`, `find()`, and `css()` for DOM manipulation.
    - Vanilla JavaScript Code: Utilizes native DOM methods such as `document.querySelectorAll('table tr')`, `querySelectorAll()`, and direct style manipulation with `.style.backgroundColor`.

3. **Syntax Differences**:
    - jQuery Code: Uses jQuery syntax which is concise and abstracted, simplifying DOM manipulation and event handling.
    - Vanilla JavaScript Code: Involves more explicit DOM manipulation using vanilla JavaScript methods, which can be more verbose but provides a good understanding of core concepts.

4. **Event Handling**:
    - jQuery Code: Uses jQuery event handling methods like `.on()` for attaching event listeners to elements.
    - Vanilla JavaScript Code: Uses standard event listener methods like `addEventListener()` to handle events.

5. **CSS Class Manipulation**:
    - jQuery Code: Often involves adding/removing CSS classes using jQuery methods like `.addClass()` and `.removeClass()`.
    - Vanilla JavaScript Code: Achieves class manipulation by directly changing the `className` property or utilizing `classList` methods.

By transitioning from jQuery to vanilla JavaScript, you can gain a deeper understanding of how the DOM works and reduce the reliance on external libraries, which can improve performance in some cases.
*/
