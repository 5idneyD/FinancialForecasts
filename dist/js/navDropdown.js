document.addEventListener("click",function(t){try{let e=document.querySelector("#"+t.target.id);if(e.parentElement.id=="navBar"){var a=window.location.pathname;if(a=a.substring(0,a.lastIndexOf("/")),document.querySelectorAll(".navOption").forEach(function(n){n.id==e.id||document.querySelectorAll("#"+n.id).forEach(function(s){let i=s.children;if(i.length>0){let o=0;for(;o<i.length;)i[o].remove()}s.dataset.expanded="false"})}),e.dataset.expanded=="false")e.id=="salesLedger"?(e.insertAdjacentHTML("beforeend","<br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/addSalesInvoice'>Add Sales Invoice</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/viewSalesInvoices'>View Sales Invoices</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/Customers'>View Customers</a>"),e.dataset.expanded="true"):e.id=="purchaseLedger"?(e.insertAdjacentHTML("beforeend","<br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/addPurchaseInvoice'>Add Purchase Invoice</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/viewPurchaseInvoices'>View Purchase Invoices</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/Suppliers'>View Suppliers</a>"),e.dataset.expanded="true"):e.id=="financials"?(e.insertAdjacentHTML("beforeend","<br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/chartOfAccounts'>Chart Of Accounts</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/trialBalance'>Trial Balance</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/balanceSheet'>Balance Sheet</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/profitAndLoss'>Profit & Loss</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/journal'>Post A Journal</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/nominalTransactions'>Nominal Transactions</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/batchedJournals'>Batched Journals</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/budget'>Add Budget</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/bankRec'>Bank Rec</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/agedDebt'>Aged Debt</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/cashFlow'>Cash Flow</a>"),e.dataset.expanded="true"):(e.insertAdjacentHTML("beforeend","<br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/changePassword'>Change Password</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/admin'>Admin Page</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/dashboard'>Dashboard</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/changeTheme'>Change Theme</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/help'>Help</a><br class="+t.target.id+"Option><a class='menuOption "+t.target.id+"Option' href='"+a+"/logout'>Log Out</a>"),e.dataset.expanded="true");else{var r=document.querySelectorAll("."+t.target.id+"Option");r.forEach(n=>{n.remove()}),e.dataset.expanded="false"}}}catch{}},!1);
