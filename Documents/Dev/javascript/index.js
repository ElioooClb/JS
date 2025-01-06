// document.querySelector("h4").style.background = "red";
// const baliseTitreH4 = document.querySelector("h4")
// baliseTitreH4.style.background = "blue"
const questionContainer = document.querySelector(".onClick");
//console.log(questionContainer);


questionContainer.addEventListener("click",()=>{
//questionContainer.classList.add("questionOnClick");
questionContainer.classList.toggle("questionOnClick");
})
