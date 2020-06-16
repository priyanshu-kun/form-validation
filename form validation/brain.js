"use strict"

const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
// const textarea = document.querySelector("textarea");



function showSuccess(input) {
    let parentele = input.parentElement;
    parentele.querySelector(".error").style.visibility = "hidden";
    parentele.querySelector(".exclamation").style.visibility = "hidden";
    parentele.querySelector(".circle").style.visibility = "visible";
    parentele.querySelector(".circle").classList.add("right");
}




function CheckInputUserName(UserName) {
    if (!/^[^0-9][a-zA-Z0-9_@]{1,16}$/.test(UserName.value.trim())) {
        let parentele = UserName.parentElement;
        parentele.querySelector(".circle").style.visibility = "hidden";
        parentele.querySelector(".exclamation").style.visibility = "visible";
        parentele.querySelector(".exclamation").classList.add("wrong");
        parentele.querySelector(".error").style.visibility = "visible";
        if (/^[0-9]/.test(UserName.value.trim())) {
            parentele.querySelector(".error").innerHTML = `Name can't start with a number!`;
        }
        else if (/[~`!#$%^&*()-+=\[\]{}:;"'?><,.|\/\\]+/.test(UserName.value.trim())) {
            parentele.querySelector(".error").innerHTML = "Only a-z A-Z 0-9 or '_' '@' these character set is allowed!";
        }
        else {
            parentele.querySelector(".error").innerHTML = "Only 16 character is allowed!";
        }

    }
    else {
        showSuccess(UserName);
    }
}

function CheckPassword(PassWord) {
    // console.log(PassWord)
    if (!/^[^0-9](?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[_!#&$@])[a-zA-Z0-9_#&!_$@]{6,16}$/.test(PassWord.value.trim())) {
        let parentele = PassWord.parentElement;
        parentele.querySelector(".circle").style.visibility = "hidden";
        parentele.querySelector(".exclamation").style.visibility = "visible";
        parentele.querySelector(".exclamation").classList.add("wrong");
        parentele.querySelector(".error").style.visibility = "visible";
        if (/^[0-9]/.test(PassWord.value.trim())) {
            parentele.querySelector(".error").innerHTML = `password can't start with a number!`;
        }
        else if (PassWord.value.trim().length > 16) {
            parentele.querySelector(".error").innerHTML = "Only 16 character is allowed!";

        }
        else {
            parentele.querySelector(".error").innerHTML = `password must contain 1 LC 1 UC 1 SC!`
        }
    }
    else {
        showSuccess(PassWord);
    }


}


function CheckPasswordCheck(PassWordCheck) {
    // console.log(PassWordCheck)
    let parentElement = PassWordCheck.parentElement.parentElement;
    // console.log(parentElement)
    let UserPassword = parentElement.querySelector(".password input");
    // console.log(UserPassword)
    console.log(PassWordCheck,UserPassword.value.trim())
    if(PassWordCheck.value.trim() === UserPassword.value.trim()) {
        showSuccess(PassWordCheck)
    }
    else {
        let parentele = PassWordCheck.parentElement;
        parentele.querySelector(".circle").style.visibility = "hidden";
        parentele.querySelector(".exclamation").style.visibility = "visible";
        parentele.querySelector(".exclamation").classList.add("wrong");
        parentele.querySelector(".error").style.visibility = "visible";
        parentele.querySelector(".error").innerHTML = `password Does not match. Try again!`;
    }

}

function CheckEmail(mail) {
    // console.log(mail)
    // if(mai)
    if(!/^[a-zA-Z](?=.*[0-9])[_\-\.a-zA-Z0-9]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/.test(mail.value.trim())) {
        let parentele = mail.parentElement;
        parentele.querySelector(".circle").style.visibility = "hidden";
        parentele.querySelector(".exclamation").style.visibility = "visible";
        parentele.querySelector(".exclamation").classList.add("wrong");
        parentele.querySelector(".error").style.visibility = "visible";
        // console.log("worng")
        if(/^[0-9]/.test(mail.value.trim())) {
            parentele.querySelector(".error").innerHTML = `Email Address can't start with a number!`;
        }
        else {
            parentele.querySelector(".error").innerHTML = `Email Address must contain a number or '@'!`;
        }
    }
    else {
        showSuccess(mail);
    }
}


function CheckNumber(Number) {
    // console.log(Number)
    if(!/^[0-9]{10}$/.test(Number.value.trim())) {
        let parentele = Number.parentElement;
        parentele.querySelector(".circle").style.visibility = "hidden";
        parentele.querySelector(".exclamation").style.visibility = "visible";
        parentele.querySelector(".exclamation").classList.add("wrong");
        parentele.querySelector(".error").style.visibility = "visible";
        parentele.querySelector(".error").innerHTML = `Atleast 10 characters requried in number!`;
        
    }
    else {
        showSuccess(Number)
    }
} 


function checkCorrectInput(InputsData) {


    if (InputsData.classList.contains('username')) {
        // console.log(InputsData.value.trim());
        CheckInputUserName(InputsData);
    }
    if (InputsData.classList.contains('password')) {
        CheckPassword(InputsData)
    }
    if (InputsData.classList.contains('passwordcheck')) {
        CheckPasswordCheck(InputsData)
    }
    if (InputsData.classList.contains('email')) {
        CheckEmail(InputsData)
    }
    if (InputsData.classList.contains('number')) {
        CheckNumber(InputsData)
    }

}






function CheckIsEmpty(input) {
    if (input.value === "") {
        return true;
    }
    else {
        return false
    }
}


function showError(input) {
    // console.log(input)
    let parentele = input.parentElement;
    parentele.querySelector(".circle").style.visibility = "hidden";
    parentele.querySelector(".exclamation").style.visibility = "visible";
    parentele.querySelector(".exclamation").classList.add("wrong");
    parentele.querySelector(".error").style.visibility = "visible";
    if (input.classList.contains('username')) {
        parentele.querySelector(".error").innerHTML = `Username cannot be empty!`;
    }
    if (input.classList.contains('password')) {
        parentele.querySelector(".error").innerHTML = `Password cannot be empty!`;
    }
    if (input.classList.contains('passwordcheck')) {
        parentele.querySelector(".error").innerHTML = `Password cannot be empty!`;
    }
    if (input.classList.contains('email')) {
        parentele.querySelector(".error").innerHTML = `E-mail cannot be empty!`;
    }
    if (input.classList.contains('number')) {
        parentele.querySelector(".error").innerHTML = `Number cannot be empty!`;
    }

}





inputs.forEach(item => {
    item.addEventListener("blur", (e) => {
        // console.log(item);
        if (CheckIsEmpty(item)) {
            showError(item)
        }
        else {
            checkCorrectInput(item);
            // console.log("all correct")
        }
    })
})





form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach(item => {
        if (CheckIsEmpty(item)) {
            showError(item)
        }
        else {
            checkCorrectInput(item);
            // console.log("all correct")
        }
    })
})







// // message for empty field



// // message for all set
