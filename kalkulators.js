function aprekinitVidAtzimi() {
    var ievade = document.getElementById("atzimes").value;
    if (!ievade) {
        alert("Lūdzu, ievadi atzīmes!");
        return;
    }
    var masivs = ievade.split(",");
    var summa = 0;
    var skaits = 0;
    for (var i = 0; i < masivs.length; i++) {
        var atzime = masivs[i].trim();
        if (atzime === "" || isNaN(atzime) || atzime < 1 || atzime > 10) {
            alert("Kļūda: Atzīmei jābūt skaitlim no 1 līdz 10!");
            return;
        }
        summa += Number(atzime);
        skaits++;
    }
    var videja = summa / skaits;
    document.getElementById("rezultats").innerHTML = "Vidējā atzīme: " + videja.toFixed(2);
}