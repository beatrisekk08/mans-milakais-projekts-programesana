function aprekinitVid() {
    const ievade = document.getElementById("atzimes").value;
    const dalitas = ievade.split(",").map(x => x.trim());
    const atzimes = [];

    for (let i = 0; i < dalitas.length; i++) {
        let skaitlis = parseFloat(dalitas[i]);
        if (isNaN(skaitlis) || skaitlis < 1 || skaitlis > 10) {
            alert("Kļūda: Lūdzu ievadi skaitļus no 1 līdz 10, atdalītus ar komatiem.");
            return;
        }
        atzimes.push(skaitlis);
    }

    let summa = 0;
    for (let i = 0; i < atzimes.length; i++) {
        summa += atzimes[i];
    }

    let videja = summa / atzimes.length;
    document.getElementById("rezultats").innerText = "Vidējā atzīme: " + videja.toFixed(2);
}
