# Connect-Four
Player who will connect four colors in vertical or horizontal or diagonal will win.

NOTE:
I will add a text file containing the jQuwey . And i havn't use jQuery at the HTML for creating this game because it is a larg liberary and it is not recommended with the modern websites nowadays.
Although you will find the CDN of jQuery but i have'nt use it. i have just tried it but really i don't like it.

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
