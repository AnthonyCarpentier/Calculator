function operate(firstNum, operatorOption, secondNum) {
    switch (operatorOption) {
        case `+`:
            return (firstNum + secondNum);
            break;
        case `-`:
            return (firstNum - secondNum);
            break;
        case `*`:
            return (firstNum * secondNum);
            break;
        case `/`:
            return (firstNum / secondNum);
            break;
        default:
            break;
    }
}

let currentDisplay = ``;
let areResultsShowing = 0;
let resultsContainer = document.querySelector(`#resultsContainer`);

function addToDisplayNumber(pressedButton) {

    if (areResultsShowing === 1) {
        wipeDisplayContents();
        areResultsShowing = 0;
    }

    let displayContent = document.createElement(`div`);
    displayContent.classList.add(`displayContent`);
    currentDisplay += pressedButton;
    displayContent.textContent += pressedButton;
    console.log(currentDisplay);
    resultsContainer.appendChild(displayContent);
}

function addToDisplayOperator(pressedButton) {

    if (areResultsShowing === 1) {
        wipeDisplayContents();
        areResultsShowing = 0;
    }

    let resultsContainer = document.querySelector(`#resultsContainer`);
    
    let displayContent = document.createElement(`div`);
    displayContent.classList.add(`displayContent`);
    currentDisplay +=  ` ` + pressedButton + ` `;
    displayContent.textContent += ` ` + pressedButton + ` `;
    console.log(currentDisplay);
    
    resultsContainer.appendChild(displayContent);
    }


function operateOnDisplay (currentDisplay) {
    let currentDisplayArray = currentDisplay.split(` `);
    console.log(currentDisplayArray);
    let sum = 0;
    let operatorOption = ``;
    for (i = 0; i < currentDisplayArray.length; i++) {
        console.log(`Start of loop sum = ` + sum + ` and i = ` + i);
        if (i === 0) {
            if (currentDisplayArray[i] === `+` || currentDisplayArray[i] === `-` || currentDisplayArray[i] === `*` || currentDisplayArray[i] === `/`) {
                sum = 0;
            } else if (currentDisplayArray[i] === ``) {
                sum = 0;
            } else {
                sum = parseInt(currentDisplayArray[i]);
            }
        } else {
            if (currentDisplayArray[i] === `+` || currentDisplayArray[i] === `-` || currentDisplayArray[i] === `*` || currentDisplayArray[i] === `/`) {
                operatorOption = currentDisplayArray[i];
                sum = operate(sum, operatorOption, parseInt(currentDisplayArray[(i + 1)]));
                console.log(sum + ` I operated`);
                i++;
            } else {
                console.log(sum + ` I skipped!`);
            }
        }

    }
    console.log(`Post loop sum = ` + sum);


let displayContents = resultsContainer.querySelectorAll(`div`);
displayContents.forEach(displayContent => {
    displayContent.remove();
});

let displayContent = document.createElement(`div`);
    displayContent.classList.add(`displayContent`);
    displayContent.textContent = sum;
    currentDisplay = sum;
    if (displayContent.textContent === `Infinity`) {
        displayContent.textContent = `KABOOM`;
    }
    resultsContainer.appendChild(displayContent);
    areResultsShowing = 1;

}

let button1Select = `1`;
let button2Select = `2`;
let button3Select = `3`;
let button4Select = `4`;
let button5Select = `5`;
let button6Select = `6`;
let button7Select = `7`;
let button8Select = `8`;
let button9Select = `9`;
let button0Select = `0`;
let buttonEqualsSelect = `=`;
let buttonAddSelect = `+`;
let buttonSubtractSelect = `-`;
let buttonMultiplySelect = `*`;
let buttonDivideSelect = `/`;
let buttonClearSelect = `C`;
let pressedButton = `0`;


let button0 = document.querySelector(`#button0`);
button0.addEventListener(`click`, () => {
    pressedButton = button0Select;
    addToDisplayNumber(pressedButton);
});

let button1 = document.querySelector(`#button1`);
button1.addEventListener(`click`, () => {
    pressedButton = button1Select;
    addToDisplayNumber(pressedButton);
});

let button2 = document.querySelector(`#button2`);
button2.addEventListener(`click`, () => {
    pressedButton = button2Select;
    addToDisplayNumber(pressedButton);
});

let button3 = document.querySelector(`#button3`);
button3.addEventListener(`click`, () => {
    pressedButton = button3Select;
    addToDisplayNumber(pressedButton);
});

let button4 = document.querySelector(`#button4`);
button4.addEventListener(`click`, () => {
    pressedButton = button4Select;
    addToDisplayNumber(pressedButton);
});

let button5 = document.querySelector(`#button5`);
button5.addEventListener(`click`, () => {
    pressedButton = button5Select;
    addToDisplayNumber(pressedButton);
});

let button6 = document.querySelector(`#button6`);
button6.addEventListener(`click`, () => {
    pressedButton = button6Select;
    addToDisplayNumber(pressedButton);
});

let button7 = document.querySelector(`#button7`);
button7.addEventListener(`click`, () => {
    pressedButton = button7Select;
    addToDisplayNumber(pressedButton);
});

let button8 = document.querySelector(`#button8`);
button8.addEventListener(`click`, () => {
    pressedButton = button8Select;
    addToDisplayNumber(pressedButton);
});

let button9 = document.querySelector(`#button9`);
button9.addEventListener(`click`, () => {
    pressedButton = button9Select;
    addToDisplayNumber(pressedButton);
});

let buttonAdd = document.querySelector(`#buttonAdd`);
buttonAdd.addEventListener(`click`, () => {
    pressedButton = buttonAddSelect;
    addToDisplayOperator(pressedButton);
});

let buttonSubtract = document.querySelector(`#buttonSubtract`);
buttonSubtract.addEventListener(`click`, () => {
    pressedButton = buttonSubtractSelect;
    addToDisplayOperator(pressedButton);
});

let buttonDivide = document.querySelector(`#buttonDivide`);
buttonDivide.addEventListener(`click`, () => {
    pressedButton = buttonDivideSelect;
    addToDisplayOperator(pressedButton);
});

let buttonMultiply = document.querySelector(`#buttonMultiply`);
buttonMultiply.addEventListener(`click`, () => {
    pressedButton = buttonMultiplySelect;
    addToDisplayOperator(pressedButton);
});

let buttonEquals = document.querySelector(`#buttonEquals`);
buttonEquals.addEventListener(`click`, () => {
    operateOnDisplay(currentDisplay);
});

let buttonClear = document.querySelector(`#buttonClear`);
buttonClear.addEventListener(`click`, () => {
    wipeDisplayContents();
});

function wipeDisplayContents () {
    let displayContents = resultsContainer.querySelectorAll(`div`);
    displayContents.forEach(displayContent => {
        displayContent.remove();
    });
    currentDisplay = ``;
    if (areResultsShowing === 1) {
        areResultsShowing = 0;
    }
}
