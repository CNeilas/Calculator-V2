let numberButtons = document.querySelectorAll(".number")
let operatorButtons = document.querySelectorAll(".operator")
let equalsButton = document.querySelector("#equals")
let clearButton = document.querySelector("#clear")

let num1Display = document.querySelector("#number1")
let operatorDisplay = document.querySelector("#operator")
let num2Display = document.querySelector("#number2")

let num1
let operator = ""
let num2
let result

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    if (a == 0 || b == 0) {
        return 0
    }
    return a * b
}

const divide = (a, b) => {
    if (a == 0 || b == 0) {
        return 0
    }
    return a / b
}

const operate = (num1, operator, num2) => {
    let result
    switch (operator) {
        case "+": 
            result = add(num1, num2)
            break
        case "-":
            result = subtract(num1, num2)
            break
        case "*":
            result = parseFloat(multiply(num1, num2).toFixed(2));
            break
        case "/":
            result = parseFloat(divide(num1, num2).toFixed(2));
    }

    return result
}

numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (operator == "") {
            num1Display.textContent += e.target.textContent
            num1 = num1Display.textContent
        } else if (operator != "") {
            num2Display.textContent += e.target.textContent
            num2 = num2Display.textContent
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (num1) {
            operator = e.target.textContent
            operatorDisplay.textContent = operator
        }
    })
})

equalsButton.addEventListener("click", e => {
    if (num1 && num2 && operator) {
        result = operate(+num1, operator, +num2)
        num1 = result
        num1Display.textContent = num1
        num2 = undefined
        num2Display.textContent = num2
        operator = ""
        operatorDisplay.textContent = ""
    }

})

clearButton.addEventListener("click", e => {
    num1 = undefined
    num1Display.textContent = num1
    operator = ""
    operatorDisplay.textContent = operator
    num2 = undefined
    num2Display.textContent = num2
})
