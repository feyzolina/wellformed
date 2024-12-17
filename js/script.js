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
        document.querySelector("#serit").style.left = (left_deger) + "%";
        left_deger -= 100;
        if (left_deger == -300) {
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
    if (left_deger == -200) {
        left_deger = 0;
        document.querySelector("#serit").style.left = (left_deger) + "%";
    } else {
        left_deger -= 100;
        document.querySelector("#serit").style.left = (left_deger) + "%";
    }

}
function right() {
    if (left_deger == 0) {
        left_deger = -200;
        document.querySelector("#serit").style.left = (left_deger) + "%";
    } else {
        left_deger += 100;
        document.querySelector("#serit").style.left = (left_deger) + "%";
    }

}
function modal_open() {
    document.querySelector("modal").style.display = "flex";
}
function modal_close() {
    document.querySelector("modal").style.display = "none";
}
