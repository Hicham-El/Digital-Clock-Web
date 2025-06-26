let hourElem = document.getElementById("hrs");
let minuteElem = document.getElementById("min");
let secondElem = document.getElementById("sec");

setInterval(() => {
    let now = new Date();

    hourElem.innerHTML = (now.getHours() < 10 ? "0" : "") + now.getHours();
    minuteElem.innerHTML = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
    secondElem.innerHTML = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
}, 1000);
