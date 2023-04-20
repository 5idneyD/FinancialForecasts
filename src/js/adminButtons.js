var addUserButton = document.querySelector("#addUserButton");
var removeUserButton = document.querySelector("#removeUserButton");
var chartOfAccountsButton = document.querySelector("#chartOfAccountsButton");
var closePeriodButton = document.querySelector("#closePeriodButton");
var invoiceDetailsButton = document.querySelector("#invoiceDetailsButton")

removeUserButton.style.backgroundColor = "rgba(20, 20, 20, 0.4)";
chartOfAccountsButton.style.backgroundColor = "rgba(20, 20, 20, 0.4)";
closePeriodButton.style.backgroundColor = "rgba(20, 20, 20, 0.4)";
invoiceDetailsButton.style.backgroundColor = "rgba(20, 20, 20, 0.4)";

let root = document.querySelector(":root");
let light = getComputedStyle(root).getPropertyValue("--light");
let dark = getComputedStyle(root).getPropertyValue("--dark");

function clicked(buttonId) {
    let adminButtons = document.querySelectorAll(".adminButton");
    adminButtons.forEach(element => {
        if (element.id == buttonId) {
            element.dataset.selected = "1"
        } else {
            element.dataset.selected = "0";
        }
        if (element.id == buttonId) {
            element.style.backgroundColor = dark;
            element.style.color = light;
        } else {
            element.style.backgroundColor = "rgba(20, 20, 20, 0.4)";
        }
     });
}