const registrationForm = document.querySelector("#registration__form");

const firstName = document.querySelector("#first__name");
const lastName = document.querySelector("#last__name");
const jobTitle = document.querySelector("#job__title");
const email = document.querySelector("#email");
const mobileNumber = document.querySelector("#mobile__number");
const companyName = document.querySelector("#company__name");
const region = document.querySelector("#region");

const firstNameError = document.querySelector("#first__name__error");
const lastNameError = document.querySelector("#last__name__error");
const jobTitleError = document.querySelector("#job__title__error");
const emailError = document.querySelector("#email__error");
const mobileNumberError = document.querySelector("#mobile__number__error");
const companyNameError = document.querySelector("#company__name__error");
const regionError = document.querySelector("#region__error");

let firstNameIsValid = false;
let lastNameIsValid = false;
let jobTitleIsValid = false;
let emailIsValid = false;
let mobileNumberIsValid = false;
let companyNameIsValid = false;
let regionIsValid = false;

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,})+$/;
const mobileNumberRegex = /^[7-9][0-9]{9}$/;

firstName.addEventListener("input", (e) => {
    if(e.target.value) {
        firstNameError.style.display = "none";
        firstNameIsValid = true;
    } else {
        firstNameError.style.display = "block";
        firstNameIsValid = false;
    }
});

lastName.addEventListener("input", (e) => {
    if(e.target.value) {
        lastNameError.style.display = "none";
        lastNameIsValid = true;
    } else {
        lastNameError.style.display = "block";
        lastNameIsValid = false;
    }
});

jobTitle.addEventListener("input", (e) => {
    if(e.target.value) {
        jobTitleError.style.display = "none";
        jobTitleIsValid = true;
    } else {
        jobTitleError.style.display = "block";
        jobTitleIsValid = false;
    }
});

email.addEventListener("input", (e) => {
    if(emailRegex.test(e.target.value)) {
        emailError.style.display = "none";
        emailIsValid = true;
    } else {
        emailError.style.display = "block";
        emailIsValid = false;
    }
});

mobileNumber.addEventListener("input", (e) => {
    if(mobileNumberRegex.test(e.target.value)) {
        mobileNumberError.style.display = "none";
        mobileNumberIsValid = true;
    } else {
        mobileNumberError.style.display = "block";
        mobileNumberIsValid = false;
    }
});

companyName.addEventListener("input", (e) => {
    if(e.target.value) {
        companyNameError.style.display = "none";
        companyNameIsValid = true;
    } else {
        companyNameError.style.display = "block";
        companyNameIsValid = false;
    }
});

region.addEventListener("change", (e) => {
    if(e.target.value !== "region") {
        regionError.style.display = "none";
        regionIsValid = true;
    } else {
        regionError.style.display = "block";
        regionIsValid = false;
    }
});

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!firstNameIsValid) {
        firstNameError.style.display = "block";
    }

    if(!lastNameIsValid) {
        lastNameError.style.display = "block";
    }

    if(!jobTitleIsValid) {
        jobTitleError.style.display = "block";
    }

    if(!emailIsValid) {
        emailError.style.display = "block";
    }

    if(!mobileNumberIsValid) {
        mobileNumberError.style.display = "block";
    }

    if(!companyNameIsValid) {
        companyNameError.style.display = "block";
    }

    if(!regionIsValid) {
        regionError.style.display = "block";
    }

    if(firstNameIsValid && lastNameIsValid && jobTitleIsValid && emailIsValid && mobileNumberIsValid && companyNameIsValid && regionIsValid) {
        console.log(`First Name = ${firstName.value}`);
        console.log(`Last Name = ${lastName.value}`);
        console.log(`Job Title = ${jobTitle.value}`);
        console.log(`Email = ${email.value}`);
        console.log(`Mobile Number = ${mobileNumber.value}`);
        console.log(`Company Name = ${companyName.value}`);
        console.log(`Region = ${region.value}`);
    } else {
        console.log("Form Invalid");
    }
});
