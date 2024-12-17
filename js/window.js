var pencere;
function pencereac() {
    pencere = window.open("Ölçü.pdf", "ismek", "width=500, height=300");
};
// window.close();

function boyut() {
    pencere.resizeBy(250, 300);
};

console.log(screen.height);


var cevap = confirm("onaylıyor musunuz?");
console.log(cevap);