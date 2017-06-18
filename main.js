var keys = $('.key'); // Create an array of the keys
console.log(keys);
var input = $('.inputView'); // Create a variable for the input view
console.log(input);

var keyListener = () => {


}

for (i = 0; i < keys.length; i++) {
    // Create an eventListener function
    var eventListener = function (e) {
        // Create a string of the text contained in the input view
        var inputValue = input.innerHTML;
        // Create a variable that gets the text contained in the key
        var keyValue = this.innerHTML;
        // First condition for the clear button to set the input to an empty string
        if (keyValue == 'C') {
            input.innerHTML = '';
            // Second condition for the evaluate button to trigger the eval method
        } else if (keyValue == '=') {
            var equation = inputValue;
            // Replace multiplication and division characters with their JS counterparts
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            // Run the evaluation with the new string
            input.innerHTML = eval(equation);
        } else {
            // Append the clicked key's value to the end of the input string
            input.innerHTML += keyValue;
        }
        // This keeps the touch event from triggering twice
        e.preventDefault();
    }
    // Add the listener function to whichever key is clicked or touched
    keys[i].addEventListener('click', eventListener, false);
    keys[i].addEventListener('touchstart', eventListener, false);
}