let string = "";
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let lastChar = "";

buttons.forEach((button) => {
    button.addEventListener('click', (go) => {
        const inputValue = go.target.innerHTML;

        if (isNumeric(inputValue) || isAllowedOperator(inputValue)) {
            if (isAllowedOperator(inputValue) && isAllowedOperator(lastChar)) {
                // to not add consecutive operators
                return;
            }

            string += inputValue;
            display.value = string;
        } else if (inputValue === '=') {
            string = string.replace(/x/g, '*');
            string = eval(string);
            display.value = string;
        } else if (inputValue === 'RESET') {
            string = "";
            display.value = "0";
        } else if (inputValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }

        lastChar = inputValue;
    });
});

function isNumeric(value) {
    return /^[0-9]$/.test(value);
}

function isAllowedOperator(value) {
    return /[+\-x/.]/.test(value);
}
