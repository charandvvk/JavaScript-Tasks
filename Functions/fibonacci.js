const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

const fibGen = n => {
    let arr = [];
    const num = Number(n);

    if (num === 1) {
        arr = [0];
    } else if (num === 2) {
        arr = [0, 1];
    } else if (num > 2) {
        arr = [0, 1];
        for (let i = 1; i <= num - 2; i++) {
            const len = arr.length;
            arr.push(arr[len - 1] + arr[len - 2]);
        }
    }

    console.log(...arr);
    h2.style.display = "block";
};

const generate = () => {
    let n = prompt("Enter 'n'");
    const regex = new RegExp('^[0-9]*[1-9]+$|^[1-9]+[0-9]*$');

    while (n !== null && regex.test(n) !== true) {
        if (n !== "") {
            n = prompt("Enter a valid 'n'");
        } else {
            n = prompt("You didn't enter anything");
        }
    }

    if (n !== null) {
        fibGen(n);
    }
};

btn.addEventListener("click", generate);