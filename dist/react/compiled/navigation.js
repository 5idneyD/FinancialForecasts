function App() {
  return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    id: "salesLedgerMenu",
    className: "menuHead"
  }, /*#__PURE__*/React.createElement("a", {
    id: "salesLedger",
    "data-expanded": "false"
  }, "Sales Ledger"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("li", {
    id: "purchaseLedgerMenu",
    className: "menuHead"
  }, /*#__PURE__*/React.createElement("a", {
    id: "purchaseLedger",
    "data-expanded": "false"
  }, "Purchase Ledger"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("li", {
    id: "financialsMenu",
    className: "menuHead"
  }, /*#__PURE__*/React.createElement("a", {
    id: "financials",
    "data-expanded": "false"
  }, "Financials"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("li", {
    id: "otherMenu",
    className: "menuHead"
  }, /*#__PURE__*/React.createElement("a", {
    id: "other",
    "data-expanded": "false"
  }, "Other"), /*#__PURE__*/React.createElement("br", null)));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#nav"));
