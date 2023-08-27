function totalValue(e){
    let row = e.name[0];
    console.log(row);
    let net = document.querySelector("input[name='" + row +"_net_value']");
    let vat = document.querySelector("input[name='" + row +"_vat']");
    let total = document.querySelector("input[name='" + row +"_total_value']");
    let netValue = net.valueAsNumber ? net.valueAsNumber : 0;
    let vatValue = vat.valueAsNumber ? vat.valueAsNumber : 0;
    let totalValue = netValue + vatValue;
    total.value = totalValue;
}

function vatValue(t){
    let row = t.name[0];
    let vatRate = document.querySelector("select#vatSetting").value;
    let vat = document.querySelector("input[name='" + row +"_vat']");
    let net = document.querySelector("input[name='" + row +"_net_value']");
    let vatValue = net.valueAsNumber * vatRate;
    vat.value = vatValue;
}