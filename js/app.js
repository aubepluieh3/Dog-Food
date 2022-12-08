const nameInput = document.getElementById("name");
const kgInput = document.getElementById("kg");
const kcalInput = document.getElementById("kcal");
const mainForm = document.querySelector(".main");
const submit = document.querySelector("#submit");
const resultAmountDay = document.getElementById("day");
const resultAmountTime = document.getElementById("time");

const DOGNAME_KEY = "dogname";

function onresultSubmit(event) {
  event.preventDefault();
  const dogname = nameInput.value;
  const countValue = count.options[count.selectedIndex].value;
  localStorage.setItem(DOGNAME_KEY, dogname);
  resultAmountDay.innerText = `${dogname}(이)의 하루 일일 사료급여량은 ${day()}g입니다.`;
  resultAmountTime.innerText = `하루에 ${countValue}번, ${food()}g씩 주면 됩니다!`;
}

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
  const g = Math.floor(ageBoxChange() / kcal);
  return g;
}

//한 번 줄 때 줘야하는
function food() {
  let count = document.querySelector("#count");
  let countValue = count.options[count.selectedIndex].value;
  const food = Math.floor(day() / countValue);
  return food;
}

mainForm.addEventListener("submit", onresultSubmit);
