let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();

let hrsValue = currentTime.getHours();
let minValue = currentTime.getMinutes();
let secValue = currentTime.getSeconds();


setInterval(() => {
    let currentTime = new Date();
    let hrsValue = (currentTime.getHours() < 10 ? "0" : "")+ currentTime.getHours() ;
    let minValue = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    let secValue = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();


    hrs.innerHTML = hrsValue;
    min.innerHTML = minValue;
    sec.innerHTML = secValue;



}, 1000);
