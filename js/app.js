const nameInput = document.getElementById("name");
const kgInput = document.getElementById("kg");
const kcalInput = document.querySelector("#kcal");
const submit = document.querySelector("#submit");

const DOGNAME_KEY = "dogname";

//기본 에너지 요구량
function RER() {
  const kg = kgInput.value;
  const rer = kg * 30 + 70;
  return rer;
}

//일일 에너지 요구량

function ageBoxChange() {
  let age = document.querySelector("#age");
  let ageValue = age.options[age.selectedIndex].value;
  console.log(ageValue);
  const der = ageValue * RER();
  console.log(der);
  return der;
}

//일일 사료급여량
function day() {
  const kcal = kcalInput.value;
  const g = ageBoxChange() / kcal;
  return g;
}
