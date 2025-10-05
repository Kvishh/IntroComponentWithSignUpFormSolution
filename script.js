"use strict"

const inputList = document.querySelectorAll("input");
const errorMsgsList = document.querySelectorAll(".error-message-toggle");
const errorIconsList = document.querySelectorAll(".error-icon-wrapper");
const submitButton = document.querySelector("button");

const form = document.querySelector("form");

const test = /^\S+@\S+\.\S+$/;

submitButton.addEventListener("click", checkInputsIfEmpty);

function checkInputsIfEmpty() {
    for (let i = 0; i < errorMsgsList.length; i++) {
        if (inputList.item(i).value === "") {
            if (i === 2) {
                inputList.item(i).placeholder = "email@example.com";
            }
            errorIconsList.item(i).style.display = "block";
            errorMsgsList.item(i).style.display = "block";
            inputList.item(i).style.borderColor = "hsl(0, 100%, 74%)";
        } else {
            errorIconsList.item(i).style.display = "none";
            errorMsgsList.item(i).style.display = "none";
            inputList.item(i).style.borderColor = "grey";
        }
        if (i === 2 && !inputList.item(2).value.match(test)) {
            console.log(i);
            console.log("get");
            inputList.item(i).placeholder = "email@example.com";
            errorIconsList.item(i).style.display = "block";
            errorMsgsList.item(i).style.display = "block";
            inputList.item(i).style.borderColor = "hsl(0, 100%, 74%)";
        }
    }
}
