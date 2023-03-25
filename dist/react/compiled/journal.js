var references = document.querySelector("#references").dataset.references;
var new_number = Number(references);
function Journal() {
  const [debit, setDebit] = React.useState(0);
  const [credit, setCredit] = React.useState(0);
  const [count, setCount] = React.useState(1);
  const [rows, setRows] = React.useState([/*#__PURE__*/React.createElement(Row, {
    key: "1",
    number: "1"
  })]);
  const [journalNumber, setJournalNumber] = React.useState(new_number);
  function Row(props) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.number), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "invoice",
      name: props.number + "_nominal_code"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "invoice",
      name: props.number + "_description"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "invoice",
      className: "debit",
      name: props.number + "_debit",
      onChange: () => sumDebits()
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "invoice",
      className: "credit",
      name: props.number + "_credit",
      onChange: () => sumCredits()
    })));
  }
  function addRow() {
    setCount(count + 1);
    const a = count + 1;
    setRows(rows.concat( /*#__PURE__*/React.createElement(Row, {
      key: a,
      number: a
    })));
  }
  function sumDebits() {
    var debits = document.querySelectorAll(".debit");
    var debitTotal = 0;
    debits.forEach(debit => {
      debitTotal += Number(debit.value);
    });
    setDebit(debitTotal);
  }
  function sumCredits() {
    var credits = document.querySelectorAll(".credit");
    var creditTotal = 0;
    credits.forEach(credit => {
      creditTotal += Number(credit.value);
    });
    setCredit(creditTotal);
  }
  function checkBalancing() {
    if (debit - credit != 0) {
      document.querySelector("#submitButton").type = "button";
    } else {
      try {
        document.querySelector("#submitButton").type = "submit";
      } catch {}
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/React.createElement("table", {
    className: "",
    id: "journalHead"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Journal Number"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "journal",
    name: "journalNumber",
    defaultValue: journalNumber,
    readOnly: true
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Date"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "journalDate"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Description"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "journal",
    name: "journalDescription"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Reverse"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    type: "journal",
    name: "to_reverse",
    className: "invoice"
  }, /*#__PURE__*/React.createElement("option", {
    value: "no",
    selected: true
  }, "No"), /*#__PURE__*/React.createElement("option", {
    value: "yes"
  }, "Yes")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Debit Total"), /*#__PURE__*/React.createElement("td", null, debit)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Credit Total"), /*#__PURE__*/React.createElement("td", null, credit)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => addRow()
  }, "Add Row"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    id: "submitButton"
  }, "Post Journal")), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("table", {
    className: "col"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Row"), /*#__PURE__*/React.createElement("th", null, "Nominal"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Debit"), /*#__PURE__*/React.createElement("th", null, "Credit"))), /*#__PURE__*/React.createElement("tbody", {
    id: "bodyTable"
  }, rows)), /*#__PURE__*/React.createElement("input", {
    name: "number_of_rows",
    value: count
  }), /*#__PURE__*/React.createElement("input", {
    name: "debitTotal",
    value: debit,
    onChange: checkBalancing()
  }), /*#__PURE__*/React.createElement("input", {
    name: "creditTotal",
    value: credit,
    onChange: checkBalancing()
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Journal, null), document.querySelector("#headTable"));
