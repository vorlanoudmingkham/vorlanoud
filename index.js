const randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 +".png";

let randomImageSource = "images/"+randomDiceImage;

let images1 = document.querySelectorAll("img")[0]
images1.setAttribute("src",randomImageSource);


const randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage1 = "dice" + randomNumber2 +".png";

let randomImageSource1 = "images/"+randomDiceImage1;

let images2 = document.querySelectorAll("img")[1]
images2.setAttribute("src",randomImageSource1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😎 ຜູ້ຫຼີ້ນທີ່1ຊະນະ";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " ຜູ້ຫຼີ້ນທີ່2ຊະນະ 😎"
}
else {
     document.querySelector("h1").innerHTML = "ສະເໝີ! 🤝";
}