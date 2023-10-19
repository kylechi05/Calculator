const buttons = document.querySelectorAll(".buttons");

for (let button of buttons) {
    button.addEventListener('click', () => display(button.innerHTML));
}

function display(x) {
    console.log(x);
}
