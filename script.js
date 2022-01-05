//get the div items in the game

const gameBoardDiv = document.getElementById("gameboard");
const loadingBeeDiv = document.getElementById("loadingBee");
const gameDiv = document.getElementById("game");
const wordDiv = document.getElementById("word");
const lettersDiv = document.getElementById("letters");

// get the div items in the wordsBank

const wordsBankDiv = document.querySelector("#wordsBank");
const foundTitle = document.querySelector("#foundtitle");
const wordsDiv = document.querySelector("#words");

//create your buttons

const a_button = document.createElement("button");
a_button.classList.add("button", "is-warning", "m-2");
a_button.setAttribute("value", "A");
a_button.innerHTML = "A";

const b_button = document.createElement("button");
b_button.classList.add("button", "is-warning", "m-2");
b_button.setAttribute("value", "B");
b_button.innerHTML = "B";

const c_button = document.createElement("button");
c_button.classList.add("button", "is-warning", "m-2");
c_button.setAttribute("value", "C");
c_button.innerHTML = "C";

const d_button = document.createElement("button");
d_button.classList.add("button", "is-warning", "m-2");
d_button.setAttribute("value", "D");
d_button.innerHTML = "D";

const e_button = document.createElement("button");
e_button.classList.add("button", "is-warning", "m-2");
e_button.setAttribute("value", "E");
e_button.innerHTML = "E";

const f_button = document.createElement("button");
f_button.classList.add("button", "is-warning", "m-2");
f_button.setAttribute("value", "F");
f_button.innerHTML = "F";

const addButton = document.createElement("div");
addButton.classList.add("button", "is-black");
addButton.innerHTML = "ADD";

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons

document.addEventListener("DOMContentLoaded", () => {
  console.log("add button");
  setTimeout(() => {
    gameDiv.appendChild(addButton);
  }, 3500);
});

// window.addEventListener("DOMContentLoaded", addLetterButtons());

(() => {
  console.log("iife loaded");
  setTimeout(() => {
    loadingBeeDiv.classList.toggle("hide");
    wordDiv.classList.toggle("hide");
    wordsBankDiv.classList.toggle("hide");
    lettersDiv.appendChild(a_button);
    lettersDiv.appendChild(b_button);
    lettersDiv.appendChild(c_button);
    lettersDiv.appendChild(d_button);
    lettersDiv.appendChild(e_button);
    lettersDiv.appendChild(f_button);
  }, 3000);
})();

//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.

//Step-3 write the listeners to take a letter and add to your word div

//add a function to take your word from the word div and add it to an Array to then add to your Words Bank
