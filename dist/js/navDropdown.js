document.addEventListener(
    "click",
    function (e) {
        try {
            var menu = document.querySelector("#" + e.target.id);
            var url = window.location.pathname;
            url = url.substring(0, url.lastIndexOf("/"));

            console.log(e.target.id);
            if (menu.dataset.expanded == "false") {
                menu.style.height = "fit-content";
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
                    menu.style.height = "25vh";
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
                    menu.dataset.expanded = "false";
                    menu.style.height = "6.5vh";
                });
            }
        } catch {

        }
    },
    false,
);