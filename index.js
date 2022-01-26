const biodata = { nama: "Azizi", umur: 16 };

document.getElementById("demo").innerHTML = biodata.nama + " umur " + biodata.umur + " tahun.";

const mobil = ["RAM", "Monitor", "Keyboard", "Mouse", "VGA", "Motherboard", "PS", "Prosessor", "HDD", "HDMI"]

let text = "";
for (let i = 0; i < mobil.length; i++) {
    text += "<li>" + mobil[i] + "</li>";
}

document.getElementById("mobil").innerHTML = text;