function calculateAverage() {
  let input = document.getElementById("grades").value;
  let gradesArray = input.split(",").map(Number);

  for (let i = 0; i < gradesArray.length; i++) {
    if (isNaN(gradesArray[i]) || gradesArray[i] < 1 || gradesArray[i] > 10) {
      alert("Lūdzu ievadi skaitļus no 1 līdz 10, atdalītus ar komatiem.");
      return;
    }
  }

  let sum = 0;
  for (let i = 0; i < gradesArray.length; i++) {
    sum += gradesArray[i];
  }

  let average = sum / gradesArray.length;
  document.getElementById("result").innerText = "Vidējā atzīme: " + average.toFixed(2);
}