let fir, sec;

function plus() {
    fir = document.getElementById("fir").value;
    sec = document.getElementById("sec").value;
    document.getElementById("has").innerHTML =
        parseInt(fir) + parseInt(sec);
}

let fir2, sec2;

function minus() {
    fir2 = document.getElementById("fir2").value;
    sec2 = document.getElementById("sec2").value;
    document.getElementById("has2").innerHTML =
        parseInt(fir2) - parseInt(sec2);
}

let fir3, sec3;

function kali() {
    fir3 = document.getElementById("fir3").value;
    sec3 = document.getElementById("sec3").value;
    document.getElementById("has3").innerHTML =
        parseInt(fir3) * parseInt(sec3);
}

let fir4, sec4;

function bagi() {
    fir4 = document.getElementById("fir4").value;
    sec4 = document.getElementById("sec4").value;
    document.getElementById("has4").innerHTML =
        parseInt(fir4) / parseInt(sec4);
}

let angka;
let hasil;

function nilai() {
    angka = document.getElementById("angka").value;
    if (angka >= 90) {
        hasil = "Grade A";
    } else if (angka >= 80) {
        hasil = "Grade B+";
    } else if (angka >= 70) {
        hasil = "Grade B";
    } else if (angka < 70) {
        hasil = "Grade F";
    } else {
        hasil = "Nothing"
    }
    document.getElementById("sekolah").innerHTML = hasil;
}

let don = 40, eek = 30, far = 70;
let lit = don + eek + far;
let lit2 = don - eek - far;
let lit3 = don * eek * far;
let lit4 = don / eek / far;

document.getElementById("b").innerHTML = lit;

document.getElementById("e").innerHTML = lit2;

document.getElementById("h").innerHTML = lit3;

document.getElementById("k").innerHTML = lit4;


console.log("Hello World!!!");