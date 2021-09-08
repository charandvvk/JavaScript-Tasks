const btn = document.querySelector("button");

const check = () => {
    let input = prompt("Enter an year");
    const regex = new RegExp('^[0-9]*[1-9]+$|^[1-9]+[0-9]*$');

    while (input !== null && regex.test(input) !== true) {
        if (input !== "") {
            input = prompt("Enter a valid year");
        } else {
            input = prompt("You didn't enter anything");
        }
    }

    if (input !== null) {
        const year = Number(input);
        if (year % 4 !== 0) {
            alert("Not a leap year");
        } else {
            if (year % 100 !== 0) {
                alert("Leap year");
            } else {
                if (year % 400 !== 0) {
                    alert("Not a leap year");
                } else {
                    alert("Leap year");
                }
            }
        }
    }
};

btn.addEventListener("click", check);