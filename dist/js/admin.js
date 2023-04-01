var div=document.querySelector("#body");buttons=document.querySelectorAll(".adminButton");const accounting_year=document.querySelector("meta[name='data']").getAttribute("accounting_year"),accounting_period=document.querySelector("meta[name='data']").getAttribute("accounting_period");function changeForm(){buttons.forEach(i=>{if(i.dataset.selected==1){var e=i.id.toString().slice(0,i.id.toString().length-6);console.log(e),e=="addUser"?div.innerHTML=addUser:e=="removeUser"?div.innerHTML=removeUser:e=="chartOfAccounts"?div.innerHTML=chartOfAccounts:e=="closePeriod"?div.innerHTML=closePeriod:div.innerHTML=invoiceDetails}})}var addUser=`
<div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div class="container w-50">
            <div class="row">
                <div class="col">
                    <input type="name" name="name" placeholder="name" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="email" name="email" placeholder="email" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="password" name="password" placeholder="password" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <select name="adminLevel" class="adminLevelSelect">
                    <option>Select Permission Level</option>
                        <option value="1">Basic</option>
                        <option value="2">Basic Admin</option>
                        <option value="3">Advanced Admin</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col mt-5">
                    <button type="submit" name="addUserForm">Add User</button>
                </div>
            </div>
        </div>
`,removeUser=`
<div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div class="container w-50">
            <div class="row">
                <div class="col">
                    <input type="email" name="email" placeholder="user's email" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="password" name="password" placeholder="admin password" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col mt-5">
                    <button type="submit" name="removeUserForm">Remove User</button>
                </div>
            </div>
        </div>
`,closePeriod=`
<div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div class="container w-50">
            <div class="row">
                <div class="col">
                    <p>Current Year: `+accounting_year+`</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                <p>Current Period: `+accounting_period+`</p>
                </div>
            </div>
            <div class="row">
                <div class="col mt-5">
                    <button type="submit" name="closePeriodForm">Close Period</button>
                </div>
            </div>

        <input type='name' name="period" value="`+accounting_period+`"/>
        <input type='name' name="year" value="`+accounting_year+`"/>
        </div>
`,chartOfAccounts=`
<div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div class="container w-50">
            <div class="row">
                <div class="col">
                    <input type="name" name="nominal" placeholder="Nominal Code" minlength='5' maxlength='5' aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="name" name="accountName" placeholder="Account Name" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col mt-5">
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
`,invoiceDetails=`
<div class="d-flex flex-grow-1 justify-content-center align-items-center">
        <div class="container w-50">
            <div class="row">
                <div class="col">
                    <input type="name" name="vat_number" placeholder="VAT Number" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="email" name="email" placeholder="Email To Include" aria-required="true"/>
                </div>
            </div>
            <div class="row">
                <div class="col mt-5">
                    <button type="submit" name="invoiceDetailsForm">Submit</button>
                </div>
            </div>
        </div>
`;
