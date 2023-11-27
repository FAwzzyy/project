//select home page Element
let homepage = document.querySelector(".home-page");

//aray of imgs
let ImgsArray =["01.gpj","02.gpj","03.gpj","04.gpj","05.gpj"];

setInterval(() => {
    //get Random Number 
let randomNumber =Math.floor(Math.random()* ImgsArray.length);

    console.log(randomNumber);

    //changing background imgs url
homepage.style.backgroundImgs = 'url("imgs/'+ imgsArray[randomNumber]+'")';


} ,1000)



