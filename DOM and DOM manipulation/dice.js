const btn = document.querySelector("button");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const h1 = document.querySelector("h1");

const roll = () => {
    h1.innerHTML = "";
    let i = 1;
    let num1 = 0;
    let num2 = 0;

    const myVar = setInterval(() => {
        if (i > 20) {
            clearInterval(myVar);
        }

        num1 = Math.floor(Math.random() * 6) + 1;
        num2 = Math.floor(Math.random() * 6) + 1;
        p1.innerHTML = num1;
        p2.innerHTML = num2;
        i++;
    }, 31.25);

    setTimeout(() => {
        if (num1 > num2) {
            res = "Player 1 wins";
        } else if (num1 < num2) {
            res = "Player 2 wins";
        } else {
            res = "Draw";
        }

        h1.innerHTML = res;
    }, 1000);
};

btn.addEventListener("click", roll);