let form = document.getElementById("form");
let n_pass = document.getElementById("n_pass");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  let pass = document.getElementById("pass");
  var email = document.getElementById("email").value;
  var phn = document.getElementById("phn").value;
  let form = document.getElementById("form");
  let value = n_pass.value;
  let value2 = pass.value;
  if (value == value2) {
    form.innerHTML = ""; 
    // var resultDiv = document.createElement("div");
    form.innerHTML = `Full Name: ${fname} ${lname} <br> Email id: ${email} <br> Phone no.: ${phn}`;
    form.insertAdjacentHTML +=  "<button type ='submit' >conform</button>";
  }else{
    pass.style.backgroundColor="red";
  }
});

n_pass.addEventListener("input", () => {
  let value = n_pass.value;
  const char = /[!@#$%^&*()_+=~`]/;

  if (value === "") {
    n_pass.style.backgroundColor = "white";
  } else if (char.test(value) && value.length >= 6) {
    n_pass.style.backgroundColor = "rgb(156, 249, 156)";
  } else if (char.test(value) && value.length <= 6) {
    n_pass.style.backgroundColor = "rgb(236, 236, 168)";
  } else {
    n_pass.style.backgroundColor = "rgb(236, 146, 146)";
  }
});
