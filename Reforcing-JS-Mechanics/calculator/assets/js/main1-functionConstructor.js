//traning constructor function

function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickButton();
        this.enterKey();
    };

    this.backspace = () => this.display.value = this.display.value.slice(0, -1);

    this.clearDisplay = () => this.display.value = '';

    this.addNumbers = (value) => {
        this.display.value += value;
        this.display.focus();
    };
    this.calculate = () => {
        try {
            let result = eval(this.display.value);
            if (!result) {
                return alert('Invalid Operation NaN');
            }
            this.display.value = result;
        } catch (e) {
            return alert('Invalid Operation');
        }
    }
    this.enterKey = () => {
        this.display.addEventListener('keypress', event => {
            if (event.keyCode == 13) {
                this.calculate();
            }
        });
    };
    this.clickButton = () => {
        document.addEventListener('click', event => {
            const ele = event.target;
            if (ele.classList.contains('btn-num')) this.addNumbers(ele.innerText);
            if (ele.classList.contains('btn-clear')) this.clearDisplay();
            if (ele.classList.contains('btn-del')) this.backspace();
            if (ele.classList.contains('btn-eq')) this.calculate();
        });
    }
}

const calculator = new Calculator();
calculator.start();
