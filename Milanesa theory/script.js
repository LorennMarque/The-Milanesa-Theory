/////////////////////////////////////////////////////////////////////////////

/*
//VARIABLES AND CHECKBOXES
let school = document.getElementsByName("checkbox")[0];
school.addEventListener("click", Refresh);

let income = document.getElementsByName("checkbox")[1];
income.addEventListener("click", Refresh);

let programming = document.getElementsByName("checkbox")[2];
programming.addEventListener("click", Refresh);


let schoolState = school.checked;
let incomeState = income.checked;
let programmingState = programming.checked;

// STATE CHECKING AND DECITION MAKING
function Refresh(){
    //refresh variables
    schoolState = school.checked;
    incomeState = income.checked;
    programmingState = programming.checked;

    // console logging all states (just helpful)
    console.log("------------------")
    console.log("School is = " + schoolState);
    console.log("Income is = " + incomeState);
    console.log("Coding is = " + programmingState);

}
*/

//////////////////////////////////////////////////////////////////////////

// variables
let milanesa = document.getElementsByName("checkbox")[0];
let engordar = document.getElementsByName("checkbox")[1];
let feliz = document.getElementsByName("checkbox")[2];

emoji = document.querySelectorAll("img")[1];

//listen to clicks
milanesa.addEventListener("click", () => {
  milanesaIsClicked();
  Refresh();
});
engordar.addEventListener("click", () => {
  engordarIsClicked();
  Refresh();
});
feliz.addEventListener("click", () => {
  felizIsClicked();
  Refresh();
});

function milanesaIsClicked() {
  //refresh variables
  milanesaState = milanesa.checked;
  engordarState = engordar.checked;
  felizState = feliz.checked;

  console.log("milanesa has been clicked!");

  if (milanesaState == true) {
    engordar.checked = false;
    feliz.checked = true;
  }
}

function engordarIsClicked() {
  //refresh variables
  milanesaState = milanesa.checked;
  engordarState = engordar.checked;
  felizState = feliz.checked;

  console.log("engordarIsClicked has been clicked!");
  if (engordarState == true) {
    milanesa.checked = false;
    feliz.checked = false;
  }
}

function felizIsClicked() {
  //refresh variables
  milanesaState = milanesa.checked;
  engordarState = engordar.checked;
  felizState = feliz.checked;

  console.log("feliz has been clicked!");
  if (felizState == true) {
    milanesa.checked = true;
    engordar.checked = false;
  }
}

function Refresh() {
  milanesaState = milanesa.checked;
  engordarState = engordar.checked;
  felizState = feliz.checked;
  if (milanesaState == true && engordarState == false && felizState == true) {
    emoji.setAttribute("src", "images/feliz.png");
  } else if (
    milanesaState == false &&
    engordarState == false &&
    felizState == true
  ) {
    emoji.setAttribute("src", "images/serfeliz.png");
  } else if (
    milanesaState == false &&
    engordarState == false &&
    felizState == false
  ) {
    emoji.setAttribute("src", "images/initial.png");
  } else if (
    milanesaState == false &&
    engordarState == true &&
    felizState == false
  ) {
    emoji.setAttribute("src", "images/engordar.png");
  } else if (
    milanesaState == true &&
    engordarState == false &&
    felizState == false
  ) {
    emoji.setAttribute("src", "images/satisfecho.png");
  }
}
