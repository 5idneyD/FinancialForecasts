function App() {
  function toggle(id) {
    var div = document.getElementById(id + "a");
    div.style.display = div.style.display == "block" ? "none" : "block";
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "first",
    onClick: e => toggle(e.target.id),
    className: "helpHead"
  }, "How to Add a User"), /*#__PURE__*/React.createElement("div", {
    id: "firsta",
    className: "helpBody"
  }, /*#__PURE__*/React.createElement("p", null, "Go to the admin page (in 'Other') and, if you have permission, you will see an option to add a new user.", /*#__PURE__*/React.createElement("br", null), "If you don't see this option, you may not have permission to perform this task.", /*#__PURE__*/React.createElement("br", null), "Please contact somebody who does have permission.")), /*#__PURE__*/React.createElement("div", {
    id: "second",
    onClick: e => toggle(e.target.id),
    className: "helpHead"
  }, "How to close a period"), /*#__PURE__*/React.createElement("div", {
    id: "seconda",
    className: "helpBody"
  }, /*#__PURE__*/React.createElement("p", null, "Go to the admin page (in 'Other') and, if you have permission, you will see an option to close the current period.", /*#__PURE__*/React.createElement("br", null), "If you don't see this option, you may not have permission to perform this task.", /*#__PURE__*/React.createElement("br", null), "Please contact somebody who does have permission.")), /*#__PURE__*/React.createElement("div", {
    id: "third",
    onClick: e => toggle(e.target.id),
    className: "helpHead"
  }, "How to Reverse Journals"), /*#__PURE__*/React.createElement("div", {
    id: "thirda",
    className: "helpBody"
  }, /*#__PURE__*/React.createElement("p", null, "When posting the original journal, there will be dropdown menus in the top left corner.", /*#__PURE__*/React.createElement("br", null), "The fourth option is called 'Reverse'. Open this drop down menu and select yes.", /*#__PURE__*/React.createElement("br", null), "You can then go ahead and post this journal. The reversing journal will be added to the 'batch'.", /*#__PURE__*/React.createElement("br", null), "Once you have closed the period, you can go to the batched reversals which are saved in the", /*#__PURE__*/React.createElement("br", null), "'Batched Reversals' tab in Financials. You can click on Post Reversals which will post all reversing journals.")), /*#__PURE__*/React.createElement("div", {
    id: "fourth",
    onClick: e => toggle(e.target.id),
    className: "helpHead"
  }, "What are permission levels"), /*#__PURE__*/React.createElement("div", {
    id: "fourtha",
    className: "helpBody"
  }, /*#__PURE__*/React.createElement("p", null, "There are 3 permission levels available", /*#__PURE__*/React.createElement("br", null), "They determine what each user can do in terms of admin rights", /*#__PURE__*/React.createElement("br", null), "'Advanced Admin' can do everything", /*#__PURE__*/React.createElement("br", null), "'Basic Admin' cannot add or remove users", /*#__PURE__*/React.createElement("br", null), "'Basic' has no admin rights", /*#__PURE__*/React.createElement("br", null), "The point of this is to restrict users who managers do not want to have access to important admin changes", /*#__PURE__*/React.createElement("br", null), "The admin level is set when an account is created", /*#__PURE__*/React.createElement("br", null), "Currently, to change an admin level, an account needs to be removed and then re-created with the new level", /*#__PURE__*/React.createElement("br", null), "We are working on a new feature to make updating admin levels easier")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));
