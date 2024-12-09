document.querySelector("button").addEventListener("click", function () {
   
    if (document.querySelector("ul").style.display == "block") {
        document.querySelector("ul").style.display = "none";
    } else {
        document.querySelector("ul").style.display = "block";
    }
})