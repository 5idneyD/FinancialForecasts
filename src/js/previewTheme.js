let root = document.querySelector(":root")

function previewChange(choice){
    let option = choice.value; //light or dark
    if (option === "light") {
        root.style.setproperty("--color-80", "red");
    }
};