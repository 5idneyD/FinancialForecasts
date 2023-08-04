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
        root.style.setProperty("--primary", "#dedeea");
        root.style.setProperty("--second", "#e8e8f3");
        root.style.setProperty("--third", "purple");
        root.style.setProperty("--fontColor", "black");
        root.style.setProperty("--shadow", "20px 20px 60px #bebebe, -20px -20px 60px #ffffff");
        primaryInput.value = "#dedeea";
        secondInput.value = "#e8e8f3";
        thirdInput.value = "purple";
        textInput.value = "black";
    } else if (themeSelector.value == "dark") {
        root.style.setProperty("--primary", "#232323");
        root.style.setProperty("--second", "#363636");
        root.style.setProperty("--third", "#66c0f4");
        root.style.setProperty("--fontColor", "white");
        root.style.setProperty("--shadow", "20px 20px 60px #232323, -20px -20px 60px #232323");
        primaryInput.value = "#232323";
        secondInput.value = "#363636";
        thirdInput.value = "#66c0f4";
        textInput.value = "white";
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

