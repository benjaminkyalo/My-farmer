//My first javascript.
alert("Hello World!, farming is the global backbone!");
//Get all the elements with the class button
const buttons= document.querySelectorAll(".button");
//Add an onlcik event listener on each button
buttons.forEach((button => {
    button.addEventListener("click",() =>{
        alert("Button clicked!");
    });
}));
function myFunction() {
    const hiddenInformation = document.getElementById("hidden-information");
    hiddenInformation.style.display = "block";
  }