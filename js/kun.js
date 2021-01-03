"use strict"
document.body.addEventListener('submit', function (event) {
    event.preventDefault();
})
var k = document.getElementById('Keyingi');
var ku = document.getElementById('bill');
k.addEventListener('click', keyin);
function keyin() {
    k.style.display = "none"
    var tanlov = document.getElementById('tanlov');
    var t = tanlov.value;
    document.getElementById('soz').innerHTML = t  + "ini";
    document.getElementById('soz').style.fontWeight = "700";
    var data = document.getElementById('sana');
    var datatime = document.getElementById('sanaa');
    if (t === "Kun") {
        data.style.display = "block";
    } else {
        datatime.style.display = "block"
    }
    tanlov.style.display = "none";
    ku.style.display = "block"
}
ku.addEventListener('click', bilish)
function bilish() {
    var vaqt = Number(new Date());
    var tek = document.getElementById('soz').innerText;
    if (tek === "Kunini") {
        var vaqtt = Number(new Date(document.getElementById('a').value));
    } else {
        var vaqtt = Number(new Date(document.getElementById('b').value));
    }
    if (vaqtt) {
        if (vaqt > vaqtt) {
            if (tek === "Kunini") {
            var kun = "Siz hayotingizning " + Math.floor(((vaqt - vaqtt) / 3600000 / 24) + 1) + "-kunini yashayapsiz.<br> Bu saytga tashrif buyurganingiz uchun raxmat";
            } else if (tek === "soatini") {
                var kun = "Siz hayotingizning " + Math.floor(((vaqt - vaqtt) / 3600000) + 1) + "-soatini yashayapsiz.<br> Bu saytga tashrif buyurganingiz uchun raxmat"   
            } else if (tek === "minutini") {
                var kun = "Siz hayotingizning " + Math.floor(((vaqt - vaqtt) / 3600000 * 60) + 1) + "-minutini yashayapsiz.<br> Bu saytga tashrif buyurganingiz uchun raxmat"
            } else {
                var kun = "Siz hayotingizning " + Math.floor(((vaqt - vaqtt) / 3600000 * 60 * 60) + 1) + "-sekundini yashayapsiz.<br> Bu saytga tashrif buyurganingiz uchun raxmat"
            }
        } else {
            var kun = "Hali bu sanaga yetib kelmadik.Iltimos to'gri sana kiriting!!!"
        }
    } else {
        var kun = "Hali sana kiritilmadi!!!"
    }
    document.getElementById('natija').innerHTML = kun;
    document.getElementById('reset').style.display = "block"
}