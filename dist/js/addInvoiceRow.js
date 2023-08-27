var row_number=2,table=document.querySelector(".invoice-body"),number_of_rows_input=document.querySelector("#number_of_rows");number_of_rows_input.value=1;function addRow(){var e=`
        <div class="invoiceRow">
            <div>`+row_number+`</div>
            <div>
                <select name="`+row_number+`_nominal_code" class="nominal_select">
					<option value="" selected hidden>Choose Nominal</option>
				</select>
            </div>
            <div><input type="text" name='`+row_number+`_description'></div>
            <div><input type="number" step="0.01" name='`+row_number+`_net_value' class='net' onchange="vatValue(this); totalValue(this)"></div>
            <div><input type="number" step="0.01" name='`+row_number+`_vat' class='vat' onchange="totalValue(this)"></div>
            <div><input type="number" step="0.01" name='`+row_number+`_total_value' class='tv'></div>
        
 `;row_number+=1,table.insertAdjacentHTML("beforeend",e),table.dataset.rows=row_number-1,number_of_rows_input.value=table.dataset.rows}function addBankRecRow(){var e=`
        <div>
            <div>`+row_number+`
            <div><input type="date" name='`+row_number+`_date'></div>
            <div><input type="text" name='`+row_number+`_invoice_number'></div>
            <div><input type="text" name='`+row_number+`_reference' class='net'></div>
            <div><input type="number" step="0.01" name='`+row_number+`_value' class='vat'></div>
        </div>
 `;row_number+=1,table.insertAdjacentHTML("beforeend",e),table.dataset.rows=row_number-1,number_of_rows_input.value=table.dataset.rows}
