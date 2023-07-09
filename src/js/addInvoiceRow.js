var row_number = 2
var table = document.querySelector(".invoice-body");
var number_of_rows_input = document.querySelector("#number_of_rows");
number_of_rows_input.value = 1;

function addRow() {

    var html = `
        <div class="invoiceRow">
            <div>` + row_number + `</div>
            <div><input type="text" name='` + row_number + `_nominal_code'></div>
            <div><input type="text" name='` + row_number + `_description'></div>
            <div><input type="text" name='` + row_number + `_net_value' class='net' onchange="calculate()"></div>
            <div><input type="text" name='` + row_number + `_vat' class='vat'></div>
            <div><input type="text" name='` + row_number + `_total_value' class='tv'></div>
        
 `
 console.log(row_number)
    row_number += 1;
    table.insertAdjacentHTML("beforeend", html);
    table.dataset.rows = row_number - 1;
    number_of_rows_input.value = table.dataset.rows;
};

function addBankRecRow() {

    var html = `
        <div>
            <div>` + row_number + `
            <div><input type="date" name='` + row_number + `_date'></div>
            <div><input type="text" name='` + row_number + `_invoice_number'></div>
            <div><input type="text" name='` + row_number + `_reference' class='net'></div>
            <div><input type="text" name='` + row_number + `_value' class='vat'></div>
        </div>
 `
    row_number += 1;
    table.insertAdjacentHTML("beforeend", html);
    table.dataset.rows = row_number - 1;
    number_of_rows_input.value = table.dataset.rows;
};