const colors = ["#010059", "#52437B", "#FF7A8A", "#FCF594"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener(`click`, function(){
    //console.log(document.body);
    //get random number between 0-3 colors[0]
    //const randomNumber = 2;
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}