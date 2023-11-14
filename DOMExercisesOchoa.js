//1
const container = document.getElementById("container");

//2
const section = document.querySelector("#container");

//3
const second =document.getElementsByClassName("second");
//also document.querySelectorAll(".second")
//4
const third =document.querySelector("ol").getElementsByClassName("third");
//also document.querySelector("ol .third")
//5
let answer = document.querySelector("#container");
answer.innerText = "Hello!";

//6
const footer = document.querySelector(".footer");
footer.classList.add("main");

//7
footer.classList.remove("main");

//8
let newLi = document.createElement("li");

//9
newLi.innerText = "four";

//10
let ul = document.querySelector("ul");
ul.append(newLi);

//11
const listItems = document.querySelectorAll("ol li");

for(let listItem of listItems){
  listItem.style.backgroundcolor = "green";
}

//12
footer.remove();