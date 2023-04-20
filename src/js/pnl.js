// All rows in the P&L (other than totals)
var els = document.querySelectorAll(".table_row");

// If the var end with P, it is Current Period value
// If the var ends with M, it is ytd value
let revenueTotalP = 0;
let directCostsTotalP = 0;
let overheadsTotalP = 0;
let ebitTotalP = 0;
let revenueTotalM = 0;
let directCostsTotalM = 0;
let overheadsTotalM = 0;
let ebitTotalM = 0;

let revenueBudgetTotalP = 0;
let directCostsBudgetTotalP = 0;
let overheadsBudgetTotalP = 0;
let ebitBudgetTotalP = 0;
let revenueBudgetTotalM = 0;
let directCostsBudgetTotalM = 0;
let overheadsBudgetTotalM = 0;
let ebitBudgetTotalM = 0;

// Loop through rows adding combining values to sum totals
els.forEach(function (el) {
	// If nominal code starts with 1 (i.e. revenue)
	if (el.classList[0][0] == "1") {
		revenueTotalP += Number(el.children[1].innerText);
		revenueTotalM += Number(el.children[2].innerText);
		revenueBudgetTotalP += Number(el.children[4].innerText);
		revenueBudgetTotalM += Number(el.children[5].innerText);
	}
	// If nominal code starts with 2 (i.e. direct cost)
	else if (el.classList[0][0] == "2") {
		directCostsTotalP += Number(el.children[1].innerText);
		directCostsTotalM += Number(el.children[2].innerText);
		directCostsBudgetTotalP += Number(el.children[4].innerText);
		directCostsBudgetTotalM += Number(el.children[5].innerText);
	}
	// If nominal code starts with 3 (i.e. overhead)
	else if (el.classList[0][0] == "3") {
		overheadsTotalP += Number(el.children[1].innerText);
		overheadsTotalM += Number(el.children[2].innerText);
		overheadsBudgetTotalP += Number(el.children[4].innerText);
		overheadsBudgetTotalM += Number(el.children[5].innerText);
	}
	// If nominal code starts with 4 (i.e. financing)
	else if (el.classList[0][0] == "4") {
		ebitTotalP += Number(el.children[1].innerText);
		ebitTotalM += Number(el.children[2].innerText);
		ebitBudgetTotalP += Number(el.children[4].innerText);
		ebitBudgetTotalM += Number(el.children[5].innerText);
	}
});

els.forEach(function (el, index) {
	// If this row starts with 1 and the next row does not (i.e. is the last revenue row), add total revenue
	// Or if this row starts with 1 and this is the last row
	if (els[index].classList[0][0] == "1" && els[index + 1].classList[0][0] != "1") {
		el.insertAdjacentHTML(
			"afterend",
			"<tr class='summaryRow'><td>Total Revenue</td><td>" +
				revenueTotalP +
				"</td><td>" +
				revenueTotalM +
				"</td><td>" +
				(revenueTotalP - revenueTotalM) +
				"</td><td>" +
				revenueBudgetTotalP +
				"</td><td>" +
				revenueBudgetTotalM +
				"</td><td>" +
				(revenueBudgetTotalP - revenueBudgetTotalM) +
				"</td></tr>",
		);
	} else if (els[index].classList[0][0] == "1" && !els[index + 1]) {
		el.insertAdjacentHTML(
			"afterend",
			"<tr class='summaryRow'><td>Total Revenue</td><td>" +
				revenueTotalP +
				"</td><td>" +
				revenueTotalM +
				"</td><td>" +
				(revenueTotalP - revenueTotalM) +
				"</td><td>" +
				revenueBudgetTotalP +
				"</td><td>" +
				revenueBudgetTotalM +
				"</td><td>" +
				(revenueBudgetTotalP - revenueBudgetTotalM) +
				"</td></tr>",
		);
	}
	// If this is the last row, add net profit
	if (!els[index + 1]) {
		el.insertAdjacentHTML(
			"afterend",
			"<tr class='summaryRow'><td>Net Profit</td><td>" +
				(revenueTotalP - directCostsTotalP - overheadsTotalP - ebitTotalP) +
				"</td><td>" +
				(revenueTotalM - directCostsTotalM - overheadsTotalM - ebitTotalM) +
				"</td><td>" +
				(revenueTotalP -
					directCostsTotalP -
					overheadsTotalP -
					ebitTotalP -
					(revenueTotalM - directCostsTotalM - overheadsTotalM - ebitTotalM)) +
				"</td><td>" +
				(revenueBudgetTotalP - directCostsBudgetTotalP - overheadsBudgetTotalP - ebitBudgetTotalP) +
				"</td><td>" +
				(revenueBudgetTotalM - directCostsBudgetTotalM - overheadsBudgetTotalM - ebitBudgetTotalM) +
				"</td><td>" +
				(revenueBudgetTotalP -
					directCostsBudgetTotalP -
					overheadsBudgetTotalP -
					ebitBudgetTotalP -
					(revenueBudgetTotalM - directCostsBudgetTotalM - overheadsBudgetTotalM - ebitBudgetTotalM)) +
				"</td></tr>",
		);
	}
	// If this row starts with 2 and the next row starts with 3, add gross profit
	// If there are no rows starting with 3, gross profit is left out and goes straight to net profit
	if (els[index].classList[0][0] == "2" && els[index + 1].classList[0][0] == "3") {
		el.insertAdjacentHTML(
			"afterend",
			"<tr class='summaryRow'><td>Gross Profit</td><td>" +
				(revenueTotalP - directCostsTotalP) +
				"</td><td>" +
				(revenueTotalM - directCostsTotalM) +
				"</td><td>" +
				(revenueTotalP - directCostsTotalP - (revenueTotalM - directCostsTotalM)) +
				"</td><td>" +
				(revenueBudgetTotalP - directCostsBudgetTotalP) +
				"</td><td>" +
				(revenueBudgetTotalM - directCostsBudgetTotalM) +
				"</td><td>" +
				(revenueBudgetTotalP - directCostsBudgetTotalP - (revenueBudgetTotalM - directCostsBudgetTotalM)) +
				"</td></tr>",
		);
	}

	if (els[index].classList[0][0] == "3" && els[index + 1].classList[0][0] != "3") {
		el.insertAdjacentHTML(
			"afterend",
			"<tr class='summaryRow'><td>EBITDA</td><td>" +
				(revenueTotalP - directCostsTotalP - overheadsTotalP) +
				"</td><td>" +
				(revenueTotalM - directCostsTotalM - overheadsTotalM) +
				"</td><td>" +
				(revenueTotalP -
					directCostsTotalP -
					overheadsTotalP -
					(revenueTotalM - directCostsTotalM - overheadsTotalM)) +
				"</td><td>" +
				(revenueBudgetTotalP - directCostsBudgetTotalP - overheadsBudgetTotalP) +
				"</td><td>" +
				(revenueBudgetTotalM - directCostsBudgetTotalM - overheadsBudgetTotalM) +
				"</td><td>" +
				(revenueBudgetTotalP -
					directCostsBudgetTotalP -
					overheadsBudgetTotalP -
					(revenueBudgetTotalM - directCostsBudgetTotalM - overheadsBudgetTotalM)) +
				"</td></tr>",
		);
	}
});

// Add a thousand seperator to all numbers in the table
var els = document.getElementById("table").getElementsByTagName("td");

for (var i = 1; i < els.length; i++) {
	// Test if the formatting will cause error,
	// If so, pass
	// else, format
	if (Number(els[i].innerText).toLocaleString("en") == "NaN") {
	} else {
		els[i].innerText = Number(els[i].innerText).toLocaleString("en");
	}
}
