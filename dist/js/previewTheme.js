function previewChange(){root.style.setProperty("--primary",document.querySelector("input[name='primary']").value),root.style.setProperty("--second",document.querySelector("input[name='second']").value),root.style.setProperty("--third",document.querySelector("input[name='third']").value),root.style.setProperty("--fontColor",document.querySelector("input[name='text']").value),root.style.setProperty("--shadow","none")}var themeSelector=document.querySelector("#themeSelector"),primaryInput=document.querySelector("input[name='primary']"),secondInput=document.querySelector("input[name='second']"),thirdInput=document.querySelector("input[name='third']"),textInput=document.querySelector("input[name='text']");themeSelector.addEventListener("change",function(){themeSelector.value=="light"?(root.style.setProperty("--primary","#dedeea"),root.style.setProperty("--second","#e8e8f3"),root.style.setProperty("--third","purple"),root.style.setProperty("--fontColor","black"),root.style.setProperty("--shadow","20px 20px 60px #bebebe, -20px -20px 60px #ffffff"),primaryInput.value="#dedeea",secondInput.value="#e8e8f3",thirdInput.value="purple",textInput.value="black"):themeSelector.value=="dark"&&(root.style.setProperty("--primary","#232323"),root.style.setProperty("--second","#363636"),root.style.setProperty("--third","#fae018"),root.style.setProperty("--fontColor","white"),root.style.setProperty("--shadow","20px 20px 60px #232323, -20px -20px 60px #232323"),primaryInput.value="#232323",secondInput.value="#363636",thirdInput.value="#fae018",textInput.value="white")});var primaryScale=document.querySelector("#primaryScale"),primaryInput=document.querySelector("input[name='primary']"),secondScale=document.querySelector("#secondScale"),secondInput=document.querySelector("input[name='second']"),thirdScale=document.querySelector("#thirdScale"),thirdInput=document.querySelector("input[name='third']"),textScale=document.querySelector("#textScale"),textInput=document.querySelector("input[name='text']");primaryScale.addEventListener("change",function(){primaryInput.value=primaryScale.value}),primaryInput.addEventListener("change",function(){primaryScale.value=primaryInput.value}),secondScale.addEventListener("change",function(){secondInput.value=secondScale.value}),secondInput.addEventListener("change",function(){secondScale.value=secondInput.value}),thirdScale.addEventListener("change",function(){thirdInput.value=thirdScale.value}),thirdInput.addEventListener("change",function(){thirdScale.value=thirdInput.value}),textScale.addEventListener("change",function(){textInput.value=textScale.value}),textInput.addEventListener("change",function(){textScale.value=textInput.value});
