// document.querySelector("h4").style.background = "red";
// const baliseTitreH4 = document.querySelector("h4")
// baliseTitreH4.style.background = "blue"
//console.log(questionContainer);
const questionContainer = document.querySelector(".onClick");
const button1 = document.querySelector("#button1");
const button2 = document.getElementById("button2");
const response = document.querySelector("p");

questionContainer.addEventListener("click",()=>{
//questionContainer.classList.add("questionOnClick");
questionContainer.classList.toggle("questionOnClick");
})

// button1.addEventListener("click", () => {
//     console.log("methode 2")
//     response.style.visibility = "visible";
//     response.style.background = "green";
// })
// button2.addEventListener("click", () => {
//     console.log("methode 3")
//     response.style.visibility = "visible";
//     response.style.background = "red";
// })

button1.addEventListener("click", () => {
    console.log("method 2 sur le bouton à l'id btn-1");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "green";
})
button2.addEventListener("click", () => {
    console.log("method 3 sur le bouton à l'id btn-2");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "red";
})