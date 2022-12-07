const nameInput = document.getElementById("name");
const kgInput = document.getElementById("kg");
const kcalInput = document.querySelector("#kcal");
const submit = document.querySelector("#submit");

const DOGNAME_KEY = "dogname";

//기본 에너지 요구량
function RER() {
  const kg = kgInput.value;
  console.log(kg);
  const rer = kg * 30 + 70;
  return rer;
}

//일일 에너지 요구량

function ageBoxChange() {
  let age = document.querySelector("#age");
  let ageValue = age.options[age.selectedIndex].value;
  console.log(ageValue);
  const der = ageValue * RER();
  return der;
}
