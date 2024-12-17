document.querySelector("button").addEventListener("click", function () {

    if (document.querySelector("ul").style.display == "block") {
        document.querySelector("ul").style.display = "none";
    } else {
        document.querySelector("ul").style.display = "block";
    }
});
var autogecis;    //bu slaytın kayması
var left_deger;
function slayt() {
    left_deger = 0;
    autogecis = setInterval(function () {
        document.querySelector("#serit").style.left = (left_deger) + "px";
        left_deger -= 1200;
        if (left_deger == -3600) {
            left_deger = 0;
        }
    }, 2000);
}
slayt();
document.querySelector(".ilerigeri").addEventListener("mouseover", function () {
    clearInterval(autogecis);
});
document.querySelector(".ilerigeri").addEventListener("mouseout", function () {
    setTimeout(slayt(), 0);
});


//bu da oklarla kaydırma
function left() {
    if (left_deger == -2400) {
        left_deger = 0;
        document.querySelector("#serit").style.left = (left_deger) + "px";
    } else {
        left_deger -= 1200;
        document.querySelector("#serit").style.left = (left_deger) + "px";
    }
   
}
function right() {
    if (left_deger == 0) {
        left_deger = -2400;
        document.querySelector("#serit").style.left = (left_deger) + "px";
    } else {
        left_deger += 1200;
        document.querySelector("#serit").style.left = (left_deger) + "px";
    }
    
}
