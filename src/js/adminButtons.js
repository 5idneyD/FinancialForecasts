var addUserButton = document.querySelector("#addUserButton");
var removeUserButton = document.querySelector("#removeUserButton");
var chartOfAccountsButton = document.querySelector("#chartOfAccountsButton");
var closePeriodButton = document.querySelector("#closePeriodButton");
var invoiceDetailsButton = document.querySelector("#invoiceDetailsButton")


function clicked(buttonId) {
    let adminButtons = document.querySelectorAll(".adminButton");
    adminButtons.forEach(element => {
        if (element.id == buttonId) {
            element.dataset.selected = "1"
        } else {
            element.dataset.selected = "0";
        }
     });
}