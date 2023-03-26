function previewChange() {
    var root = document.querySelector(":root");
    root.style.setProperty("--dark", document.querySelector("input[name='dark']").value)
    root.style.setProperty("--light", document.querySelector("input[name='light']").value)
    root.style.setProperty("--tableBorder", document.querySelector("input[name='tableBorder']").value)
}


var themeSelector = document.querySelector("#themeSelector");
var lightInput = document.querySelector("input[name='light']");
var darkInput = document.querySelector("input[name='dark']");;
var tableBorderInput = document.querySelector("input[name='tableBorder']");;
var root = document.querySelector(":root");

themeSelector.addEventListener("change", function () {
    if (themeSelector.value == "default") {
        root.style.setProperty("--dark", "#120929");
        root.style.setProperty("--light", "#ecf0f3");
        root.style.setProperty("--tableBorder", "#65463E")
        darkInput.value = "#111111";
        lightInput.value = "#B5E5CF";
        tableBorderInput.value = "#65463E";
    } else if (themeSelector.value == "retro") {
        root.style.setProperty("--dark", "#3E424B");
        root.style.setProperty("--light", "#B9BBB6");
        root.style.setProperty("--tableBorder", "#65463E")
        darkInput.value = "#3E424B";
        lightInput.value = "#B9BBB6";
        tableBorderInput.value = "#65463E";
    } else if (themeSelector.value == "blackAndWhite") {
        root.style.setProperty("--dark", "#000000");
        root.style.setProperty("--light", "#ffffff");
        root.style.setProperty("--tableBorder", "#65463E")
        darkInput.value = "#000000";
        lightInput.value = "#111111";
        tableBorderInput.value = "#65463E";
    }
});


/// The user can use a scale to change the colours as well as type in hex codes

var lightScale = document.querySelector("#lightScale");
var lightInput = document.querySelector("input[name='light']");
var darkScale = document.querySelector("#darkScale");
var darkInput = document.querySelector("input[name='dark']");
var borderScale = document.querySelector("#borderScale");
var borderInput = document.querySelector("input[name='tableBorder']");


lightScale.addEventListener("change", function () {
    lightInput.value = lightScale.value;
})
lightInput.addEventListener("change", function () {
    lightScale.value = lightInput.value;
})
darkScale.addEventListener("change", function () {
    darkInput.value = darkScale.value;
})
darkInput.addEventListener("change", function () {
    darkScale.value = darkInput.value;
})
borderScale.addEventListener("change", function () {
    borderInput.value = borderScale.value;
})
borderInput.addEventListener("change", function () {
    borderScale.value = borderInput.value;
})

