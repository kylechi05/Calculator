const buttons = document.querySelectorAll(".buttons");
const displayer = document.querySelector(".display-bar");

for (let button of buttons) {
    button.addEventListener('click', () => display(button.innerHTML));
}

let stack = [];

function display(x) {
    switch(x) {
        case "AC":
            displayer.innerHTML = null;
            stack = [];
            break;
        case "CE":
            displayer.innerHTML = displayer.innerHTML.slice(0, -1);
            stack.pop();
            break;
        case "=":
            calculate(stack);
            break;
        default:
            displayer.innerHTML += x;
            switch(x) {
                case "÷":
                    stack.push("/");
                    break;
                case "×":
                    stack.push("*");
                    break;
                case "-":
                    stack.push("-");
                    break;
                case "+":
                    stack.push("+");
                    break;
                default:
                    stack.push(x);
            }
    }
}

function calculate(x) {
    try {
        let answer = eval(x.join(""));
        console.log(answer);
        stack = [answer];
        displayer.innerHTML = answer;
    }
    catch (error) {
        console.log(error);
        displayer.innerHTML = error;
    }

    
}