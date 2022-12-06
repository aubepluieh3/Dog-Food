const nameInput = document.querySelector("#name");
const kgInput = document.querySelector("#kg");
const submit = document.querySelector("#submit");

const DOGNAME_KEY = "dogname";

//기본 에너지 요구량
function RER() {
  const kg = kgInput.value();
  const rer = kg * 30 + 70;
  return rer;
}
