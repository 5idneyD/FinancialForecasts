document.addEventListener(
    "click",
    function (e) {
        try {
            let menu = document.querySelector("#" + e.target.id);
            if (menu.parentElement.id != "navBar") {

            } else {
                var url = window.location.pathname;
                url = url.substring(0, url.lastIndexOf("/"));

                // This section closes nav menu options when a different option is opened/selected
                // navOptions selects all the menu option
                // We then loop through the menu
                // We ignore the option selected so we don't immediately close it when selected
                // If the option wasn't selected, we get all it's id
                // Using it's id, we loop through each option
                // We call its children elements ch
                // If it's children is longer than 0 (i.e. is expanded), we loop through the children
                // Removing each child using a while loop
                // i.e. remove element as index 0 until there is no child at 0 (i.e all gone)
                // We then set the nav option as data-expanded false
                let navOptions = document.querySelectorAll(".navOption");
                navOptions.forEach(function (t) {
                    if (t.id == menu.id) {

                    } else {
                        let options = document.querySelectorAll("#" + t.id);
                        options.forEach(function (p) {
                            let ch = p.children;
                            if (ch.length > 0) {

                                let q = 0
                                while (q < ch.length) {
                                    ch[q].remove()

                                }
                            }
                            p.dataset.expanded = "false";
                        })
                    }
                })

                if (menu.dataset.expanded == "false") {
                    if (menu.id == "salesLedger") {
                        menu.insertAdjacentHTML(
                            "beforeend",
                            "<br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/addSalesInvoice'>Add Sales Invoice</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/viewSalesInvoices'>View Sales Invoices</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/Customers'>View Customers</a>",
                        );
                        menu.dataset.expanded = "true";
                    } else if (menu.id == "purchaseLedger") {
                        menu.insertAdjacentHTML(
                            "beforeend",
                            "<br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/addPurchaseInvoice'>Add Purchase Invoice</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/viewPurchaseInvoices'>View Purchase Invoices</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/Suppliers'>View Suppliers</a>",
                        );
                        menu.dataset.expanded = "true";
                    } else if (menu.id == "financials") {
                        menu.insertAdjacentHTML(
                            "beforeend",
                            "<br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/chartOfAccounts'>Chart Of Accounts</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/trialBalance'>Trial Balance</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/balanceSheet'>Balance Sheet</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/profitAndLoss'>Profit & Loss</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/journal'>Post A Journal</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/nominalTransactions'>Nominal Transactions</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/batchedJournals'>Batched Journals</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/budget'>Add Budget</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/bankRec'>Bank Rec</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/agedDebt'>Aged Debt</a>"
                        );
                        menu.dataset.expanded = "true";
                    } else {
                        menu.insertAdjacentHTML(
                            "beforeend",
                            "<br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/changePassword'>Change Password</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/admin'>Admin Page</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/dashboard'>Dashboard</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/changeTheme'>Change Theme</a><br class=" +
                            e.target.id +
                            "Option><a class='menuOption " +
                            e.target.id +
                            "Option' href='" + url + "/help'>Help</a>",
                        );
                        menu.dataset.expanded = "true";
                    }
                } else {
                    var options = document.querySelectorAll("." + e.target.id + "Option");
                    options.forEach((option) => {
                        option.remove();
                    })
                    menu.dataset.expanded = "false";

                }
            }
        } catch {

        }
    },
    false,
);