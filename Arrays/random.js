const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

const names = ["Madhav", "Manaswini", "Akshat", "Dhanush", "Avinash", "Charan", "Gautham", "Dheeraj", "Sanjay", "Shradha", "Visharad", "Benny", "Bharath", "Akshith", "Srichandra", "Ritu", "Yogeswari", "Devang", "Ankith", "Sagar"];

const select = () => {
    const i = Math.floor(Math.random() * 20);
    console.log(names[i]);
    h2.style.display = "block";
};

btn.addEventListener("click", select);