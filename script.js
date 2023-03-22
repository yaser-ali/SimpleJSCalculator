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
    else if (val === "DE") {
        var del = calcDisplayCurrent.textContent.slice(0, -1);
        CombineCalculation = del;
        console.log(calculator);
        calcDisplayCurrent.textContent = del;
        calculator = calcDisplayCurrent.textContent;
        // calcDisplayCurrent.textContent = CombineCalculation;
    }
    else if (val === "=") {
        console.log(CombineCalculation);
        try {
            calcDisplayPrevious.textContent = CombineCalculation;
            calcDisplayCurrent.textContent = eval(CombineCalculation);
        }
        catch (err) {
            alert("Error!");
        }
    }
    else {
        calculator.push(val);
        CombineCalculation = calculator.join('');
        calcDisplayCurrent.textContent = CombineCalculation;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
