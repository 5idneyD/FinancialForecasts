let els = document.querySelectorAll(".table_row");
let totalAssetsDebit = document.querySelector("#totalAssetsDebit");
let totalAssetsCredit = document.querySelector("#totalAssetsCredit");
let totalLiabilitiesDebit = document.querySelector("#totalLiabilitiesDebit");
let totalLiabilitiesCredit = document.querySelector("#totalLiabilitiesCredit");
let netAssetsDebit = document.querySelector("#netAssetsDebit");
let netAssetsCredit = document.querySelector("#netAssetsCredit");
let assetsTotal = 0;
let liabilitiesTotal = 0;


// Loop through all nominal accounts and append their value to the assets or
// liabilities balance, depending on the nominal code
els.forEach(e=>{
	let nominal = e.children[0].innerHTML;
	let debitBalance = parseFloat(e.children[2].innerHTML);
	let creditBalance = parseFloat(e.children[3].innerHTML);
	if (nominal[0] == "6"){
		assetsTotal += debitBalance;
		assetsTotal -= creditBalance;
	} else {
		liabilitiesTotal += debitBalance;
		liabilitiesTotal -= creditBalance;
	}
});

if (assetsTotal >=0) {
	totalAssetsDebit.innerHTML = assetsTotal;
} else {
	totalAssetsCredit.innerHTML = assetsTotal * -1;
}

if (liabilitiesTotal >=0) {
	totalLiabilitiesDebit.innerHTML = liabilitiesTotal;
} else {
	totalLiabilitiesCredit.innerHTML = liabilitiesTotal * -1;
};


let netAssets = assetsTotal + liabilitiesTotal;
if (netAssets >=0) {
	netAssetsDebit.innerHTML = netAssets;
} else {
	netAssetsCredit.innerHTML = netAssets * -1;
};

