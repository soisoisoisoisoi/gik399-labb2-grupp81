//hämta element genom olika DOM-funktioner

//checkbox hämtas från getElementById
const checkbox = document.getElementById("divStyle");

//textfälten hämtas från getElementsByClassName
const textFields = document.getElementsByClassName("textfield");

//knapp hämtas via querySelector
const removeButton = document.querySelector("#removeBtn");

//hämta Div via getElementById
const outputDiv = document.getElementById("outputDiv");

//funktionsdeklaration

function handleInputEvent(e) {
  console.log("Event target:", e.target);
  const targetName = e.target.name;
  console.log("Name attribute:", targetName);

  if (targetName === "content") {
    // skriv innehållet i diven
    outputDiv.innerHTML = e.target.value;
  }
}
