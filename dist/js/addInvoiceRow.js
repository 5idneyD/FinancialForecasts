var row_number=2,table=document.querySelector("#bodyTable"),number_of_rows_input=document.querySelector("#number_of_rows");number_of_rows_input.value=1;function addRow(){var t=`
        <tr class="invoiceRow">
            <td>`+row_number+`
            <td><input type="text" name='`+row_number+`_nominal_code'></td>
            <td><input type="text" name='`+row_number+`_description'></td>
            <td><input type="text" name='`+row_number+`_net_value' class='net'  onchange="calculate()"></td>
            <td><input type="text" name='`+row_number+`_vat' class='vat'></td>
            <td><input type="text" name='`+row_number+`_total_value' class='tv'></td>
        </tr>
 `;row_number+=1,table.insertAdjacentHTML("beforeend",t),table.dataset.rows=row_number-1,number_of_rows_input.value=table.dataset.rows}function addBankRecRow(){var t=`
        <tr>
            <td>`+row_number+`
            <td><input type="date" name='`+row_number+`_date'></td>
            <td><input type="text" name='`+row_number+`_invoice_number'></td>
            <td><input type="text" name='`+row_number+`_reference' class='net'></td>
            <td><input type="text" name='`+row_number+`_value' class='vat'></td>
        </tr>
 `;row_number+=1,table.insertAdjacentHTML("beforeend",t),table.dataset.rows=row_number-1,number_of_rows_input.value=table.dataset.rows}
