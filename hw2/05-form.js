// Add your code here
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const registration = document.querySelector("#selection");
const programming = document.querySelector("#check1");
const operating = document.querySelector("#check2");
const devlopement = document.querySelector("#check3");
const extra = document.querySelector("#extra");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(`Full Name: ${fullname.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Registration Status: ${registration.value}`);
    console.log(`Programming Languages: ${programming.checked}`);
    console.log(`Operating Systems: ${operating.checked}`);
    console.log(`Full Stack Web Development: ${devlopement.checked}`);
    console.log(`anything else: ${extra.value}`);

    form.reset();
  });