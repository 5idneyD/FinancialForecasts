var div=document.querySelector("#body");buttons=document.querySelectorAll(".adminButton");const accounting_year=document.querySelector("meta[name='data']").getAttribute("accounting_year"),accounting_period=document.querySelector("meta[name='data']").getAttribute("accounting_period");var closePeriod=`
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
`;
