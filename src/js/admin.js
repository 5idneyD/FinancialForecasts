var div = document.querySelector("#body");
buttons = document.querySelectorAll(".adminButton");
const accounting_year = document.querySelector("meta[name='data']").getAttribute("accounting_year");
const accounting_period = document.querySelector("meta[name='data']").getAttribute("accounting_period")

function changeForm() {
    buttons.forEach(element => {
        if (element.dataset.selected == 1) {
            var option = element.id.toString().slice(0, element.id.toString().length - "Button".length);
            console.log(option);
            if (option == "addUser") {
                div.innerHTML = addUser;
            } else if (option == "removeUser") {
                div.innerHTML = removeUser;
            } else if (option == "chartOfAccounts") {
                div.innerHTML = chartOfAccounts;
            } else if (option == "closePeriod") {
                div.innerHTML = closePeriod
            } else {
                div.innerHTML = invoiceDetails;
            }
        }
    })
}

var addUser = `
<div>
        <div id="adminSection">
            <div>
                <div>
                    <input type="name" name="name" placeholder="name" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="email" name="email" placeholder="email" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="password" name="password" placeholder="password" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <select name="adminLevel" class="adminLevelSelect">
                    <option>Select Permission Level</option>
                        <option value="1">Basic</option>
                        <option value="2">Basic Admin</option>
                        <option value="3">Advanced Admin</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="addUserForm">Add User</button>
                </div>
            </div>
        </div>
`;

var removeUser =
    `
<div>
        <div id="adminSection">
            <div>
                <div>
                    <input type="email" name="email" placeholder="user's email" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="password" name="password" placeholder="admin password" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="removeUserForm">Remove User</button>
                </div>
            </div>
        </div>
`;
var closePeriod =
    `
<div>
        <div id="adminSection">
            <div>
                <div>
                    <p>Current Year: ` + accounting_year + `</p>
                </div>
            </div>
            <div>
                <div>
                <p>Current Period: ` + accounting_period + `</p>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="closePeriodForm">Close Period</button>
                </div>
            </div>

        <input type='name' name="period" value="` + accounting_period + `"/>
        <input type='name' name="year" value="` + accounting_year + `"/>
        </div>
`;

var chartOfAccounts =
    `
<div>
        <div id="adminSection">
            <div>
                <div>
                    <input type="name" name="nominal" placeholder="Nominal Code" minlength='5' maxlength='5' aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="name" name="accountName" placeholder="Account Name" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="addNominalForm">Add Nominal Account</button>
                    <div>
                        <ol>
                        <li><b>Nominal Code Guide</b></li>
                        <li>Revenue: 1</li>
                        <li>Direct Costs: 2</li>
                        <li>Overheads: 3</li>
                        <li>Assets: 6</li>
                        <li>Liabilities: 7</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
`


var invoiceDetails =
    `
<div>
        <div id="adminSection">
            <div>
                <div>
                    <input type="name" name="vat_number" placeholder="VAT Number" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <input type="email" name="email" placeholder="Email To Include" aria-required="true"/>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="invoiceDetailsForm">Submit</button>
                </div>
            </div>
        </div>
`


