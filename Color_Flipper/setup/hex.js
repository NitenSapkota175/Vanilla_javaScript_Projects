const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// # and then we can have hex value and the numbers can be from  zero to  9  and then 10  epresent A 11 b and so on

const btn = document.getElementById("btn");

const color =  document.querySelector(".color");

btn.addEventListener('click',function(){

        let hexColor = '#';
        for(let i = 0 ; i < 6 ; i++){
            let getRandomNumber = getRandomNumbers();
            hexColor+=hex[getRandomNumber];
        }

        color.textContent = hexColor
        document.body.style.background = hexColor;


})

function getRandomNumbers()
{
    return Math.floor(Math.random()*hex.length)
}

