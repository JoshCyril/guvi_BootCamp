function ctable() {
  event.preventDefault();

  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  add = document.getElementById("add").value;
  genChe = document.getElementsByName("gender");
  for (var radio of genChe) {
    if (radio.checked) {
      gender = radio.value;
    }
  }
  sb = document.getElementById("selectpicker");

  const food = [].filter
    .call(sb.options, (option) => option.selected)
    .map((option) => option.text);

  state = document.getElementById("state").value;
  country = document.getElementById("countr").value;
  addChi(fname, lname, gender, food, add, state, country);
}

var dynamic = document.querySelector(".addElems");
function addChi(fname, lname, gender, food, add, state, country) {
  var fetch = document.querySelector(".addElems").innerHTML;

  dynamic.innerHTML =
    `
    <tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${add}</td>
    <td>${gender}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>
    ` + fetch;
}
