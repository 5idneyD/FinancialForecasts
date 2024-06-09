let root = document.querySelector(":root")

function previewChange() {
    root.style.setProperty("--primary", document.querySelector("input[name='primary']").value)
    root.style.setProperty("--second", document.querySelector("input[name='second']").value)
    root.style.setProperty("--third", document.querySelector("input[name='third']").value)
    root.style.setProperty("--fontColor", document.querySelector("input[name='text']").value)
    root.style.setProperty("--shadow", "none");
}


var themeSelector = document.querySelector("#themeSelector");
var primaryInput = document.querySelector("input[name='primary']");
var secondInput = document.querySelector("input[name='second']");
var thirdInput = document.querySelector("input[name='third']");
var textInput = document.querySelector("input[name='text']");

themeSelector.addEventListener("change", function () {
    if (themeSelector.value == "light") {
        root.style.setProperty("--primary", "#F2CB9E");
        root.style.setProperty("--second", "#FEE7D2");
        root.style.setProperty("--third", "#294757");
        root.style.setProperty("--fontColor", "#000000");
        root.style.setProperty("--shadow", "none");
        primaryInput.value = "#F2CB9E";
        secondInput.value = "#FEE7D2";
        thirdInput.value = "#294757";
        textInput.value = "#000000";
        primaryScale.value = "#F2CB9E";
        secondScale.value = "#FEE7D2";
        thirdScale.value = "#294757";
        textScale.value = "#000000"
       } else if (themeSelector.value == "dark") {
        root.style.setProperty("--primary", "#232323");
        root.style.setProperty("--second", "#363636");
        root.style.setProperty("--third", "#66c0f4");
        root.style.setProperty("--fontColor", "#ffffff");
        root.style.setProperty("--shadow", "20px 20px 60px #232323, -20px -20px 60px #232323");
        primaryInput.value = "#232323";
        secondInput.value = "#363636";
        thirdInput.value = "#66c0f4";
        textInput.value = "#ffffff";
        primaryScale.value = "#232323";
        secondScale.value = "#363636";
        thirdScale.value = "#66c0f4";
        textScale.value = "#ffffff";
    } 
});


/// The user can use a scale to change the colours as well as type in hex codes

var primaryScale = document.querySelector("#primaryScale");
var primaryInput = document.querySelector("input[name='primary']");
var secondScale = document.querySelector("#secondScale");
var secondInput = document.querySelector("input[name='second']");
var thirdScale = document.querySelector("#thirdScale");
var thirdInput = document.querySelector("input[name='third']");
var textScale = document.querySelector("#textScale");
var textInput = document.querySelector("input[name='text']");



primaryScale.addEventListener("change", function () {
    primaryInput.value = primaryScale.value;
})
primaryInput.addEventListener("change", function () {
    primaryScale.value = primaryInput.value;
})
secondScale.addEventListener("change", function () {
    secondInput.value = secondScale.value;
})
secondInput.addEventListener("change", function () {
    secondScale.value = secondInput.value;
})
thirdScale.addEventListener("change", function () {
    thirdInput.value = thirdScale.value;
})
thirdInput.addEventListener("change", function () {
    thirdScale.value = thirdInput.value;
})
textScale.addEventListener("change", function () {
    textInput.value = textScale.value;
})
textInput.addEventListener("change", function () {
    textScale.value = textInput.value;
})

