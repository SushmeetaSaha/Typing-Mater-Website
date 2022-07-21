let text = document.getElementById("text");
let container = document.getElementById("content");
let item = document.getElementsByClassName("item");
let result = document.getElementsByClassName("result")[0];
let boxs = document.getElementsByClassName("boxs");
let things = ["old", "here", "form", "above", "than", "or", "need", "us", "by", "mother", "water", "again", "be", "see", "eat", "should", "hear", "one", "house", "hard", "hear", "hand", "its", "keep", "for", "by", "us", "move", "run", "end", "give"]
let correct = 0;
let wrong = 0;
let str = "";
let index = 0;
async function load() {
    let myHtml = "";
    for (let a = 1; a <= 16; a++) {
        myHtml += `<span class="item">${things[Math.floor(Math.random() * things.length)]}</span>`;
    }
    container.style.border = "4px solid black";
    container.innerHTML = myHtml;
    myHtml = "";
}
function check(b) {
    if (str === b) {
        correct++;
        item[index].style.backgroundColor = "green";
        boxs[0].innerText = correct;
    }
    else {
        wrong++;
        item[index].style.backgroundColor = "red";
        boxs[1].innerText = wrong;
    }
}
function push(a) { str += a; }
function check2(b) {
    let a = str.length - 1;
    if (str.charAt(a) === b.charAt(a)) {
        item[index].style.backgroundColor = "green";
    }
    else {
        item[index].style.backgroundColor = "red";
    }
}
load();
text.addEventListener("keypress", function (event) {
    if (event.code === "Space") {
        check(item[index].innerText);
        index++;
        if (index === 16) {
            container.innerHTML = "";
            index = 0;
            load();
        }
        text.value = "";
        str = "";
    }
    else {
        push(event.key);
        check2(item[index].innerText);
    }
    // console.log(event.code)
})
text.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        str = str.slice(0, str.length - 1);
    }
})
