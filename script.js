const calcDisplayCurrent = document.querySelector(".current");
const calcDisplayPrevious = document.querySelector(".previous");
const buttons = document.querySelectorAll('button');

let calculator = [];
let CombineCalculation;
// console.log(buttons);

function calculate(button) {
    
    // console.log(button);
    
    const val = button.textContent;

    if (val === "AC") {
        calculator = [];
        calcDisplayCurrent.textContent = '0';
        calcDisplayPrevious.textContent = '';

    }
    else if (val === "DE")
    {
        let calculator = calcDisplayCurrent.textContent.slice(0, -1);
        calcDisplayCurrent.textContent = calculator;
        calcDisplayCurrent.textContent.slice(0, -1) = CombineCalculation;
        // calcDisplayCurrent.textContent = calcDisplayCurrent.textContent.slice(0, -1);
        // calcDisplayCurrent.textContent.slice(0, -1) = CombineCalculation;
    }
    else if (val === "=") {
        console.log(CombineCalculation);
        calcDisplayPrevious.textContent = CombineCalculation;
        calcDisplayCurrent.textContent = eval(CombineCalculation);
    }
    else {
        calculator.push(val);
        CombineCalculation = calculator.join('');
        calcDisplayCurrent.textContent = CombineCalculation;
        // calcDisplayCurrent.textContent = calcDisplayCurrent.textContent + val;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
