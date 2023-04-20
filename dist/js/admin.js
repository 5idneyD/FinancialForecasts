var div=document.querySelector("#body");buttons=document.querySelectorAll(".adminButton");const accounting_year=document.querySelector("meta[name='data']").getAttribute("accounting_year"),accounting_period=document.querySelector("meta[name='data']").getAttribute("accounting_period");function changeForm(){buttons.forEach(e=>{if(e.dataset.selected==1){var i=e.id.toString().slice(0,e.id.toString().length-6);console.log(i),i=="addUser"?div.innerHTML=addUser:i=="removeUser"?div.innerHTML=removeUser:i=="chartOfAccounts"?div.innerHTML=chartOfAccounts:i=="closePeriod"?div.innerHTML=closePeriod:div.innerHTML=invoiceDetails}})}var addUser=`
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
`,removeUser=`
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
`,closePeriod=`
<div>
        <div id="adminSection">
            <div>
                <div>
                    <p>Current Year: `+accounting_year+`</p>
                </div>
            </div>
            <div>
                <div>
                <p>Current Period: `+accounting_period+`</p>
                </div>
            </div>
            <div>
                <div>
                    <button type="submit" name="closePeriodForm">Close Period</button>
                </div>
            </div>

        <input type='name' name="period" value="`+accounting_period+`"/>
        <input type='name' name="year" value="`+accounting_year+`"/>
        </div>
`,chartOfAccounts=`
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
                    <div id="nominalGuide">
                        <ul>
                        <li><b>Nominal Code Guide</b></li>
                        <li>Revenue: 1</li>
                        <li>Direct Costs: 2</li>
                        <li>Overheads: 3</li>
                        <li>Financing: 4</li>
                        <li>Assets: 6</li>
                        <li>Liabilities: 7</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
`,invoiceDetails=`
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
`;
