function calculateTotals() {
    let i = 0;
    let els = document.querySelectorAll(".tv");
    els.forEach(e => {
        i += 1;
        let total = document.querySelector('input[name="' + i + '_total_value"]');
        let net = document.querySelector('input[name="' + i + '_net_value"]');
        let vat = document.querySelector('input[name="' + i + '_vat"]');
        total.value = Number(net.value) + Number(vat.value);
    })
}

function addVAT() {
    let vatSetting = document.querySelector("#vatSetting");

    if (vatSetting.value == "yes") {
        let i = 0
        let vatCells = document.querySelectorAll(".vat");

        vatCells.forEach(cell => {
            i += 1;
            let net = document.querySelector('input[name="' + i + '_net_value"]');

            let vat = document.querySelector('input[name="' + i + '_vat"]');
            if (net.value) {
                console.log(net.value);
                vat.value = (parseFloat(net.value) * 0.2).toFixed(2);
            };
        })
    }
}

function calculate() {
    let nets = document.querySelectorAll(".net");

    nets.forEach(net => {
        net.addEventListener(
            "change", function () {
                addVAT();
                calculateTotals();
            }
        )
    })
}

calculate();