let invoicesTable = document.querySelector("table[name='unpaid_invoices']");
let recTable = document.querySelector("table[name='current_rec']");
let recSum = document.querySelector("#rec_sum");

recSum.style.display = "none";

function invoicesTableShow() {
    invoicesTable.style.display = "revert";
    recSum.style.display = "none";
};

function recTableShow() {
    invoicesTable.style.display = "none";
    recSum.style.display = "revert";
}

function addToRec(el) {
    let row = el.parentNode.parentNode;
    row.lastElementChild.lastElementChild.setAttribute("onclick", "removeFromRec(this)");
    recTable.appendChild(row);
    sumTotal()
}

function removeFromRec(el) {
    let row = el.parentNode.parentNode;
    row.lastElementChild.lastElementChild.setAttribute("onclick", "addFromRec(this)");
    invoicesTable.appendChild(row);
    sumTotal()
}

// Re-calculate the total bank rec total each time an invoice is added or removed
let totalSum = document.querySelector("#total_value");
function sumTotal(){
    let total = 0.00;
    for (let i=1;i<recTable.rows.length; i++){
        let val = parseFloat(recTable.rows[i].childNodes[9].childNodes[0].value);
        if (recTable.rows[i].childNodes[1].children[0].value == "sales_invoice"){
        total += val;
        } else {
            total -= val;
        }
    }
   totalSum.innerText = total;
}


// Function to filter the invoices table by client code
// Automatically filters every time the input changes

// filters = [client, invoice number]
let filters = ["", ""];
let clientSearch = document.querySelector("#unpaid_invoices_client_search");
let invoiceSearch = document.querySelector("#unpaid_invoices_invoice_search");
document.addEventListener("keyup", function () {
    let tr = invoicesTable.getElementsByTagName("tr");
    filters[0] = clientSearch.value.toUpperCase();
    filters[1] = invoiceSearch.value.toUpperCase();


    for (let i = 1; i < tr.length; i++) {
        let client = tr[i].childNodes[3].children[0].value.toUpperCase();
        let invoice = tr[i].childNodes[5].children[0].value.toUpperCase();
        if (client.includes(filters[0]) && invoice.includes(filters[1])) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
})