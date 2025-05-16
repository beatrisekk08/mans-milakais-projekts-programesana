function calculateAverage() {
  const marks = [
    Number(document.getElementById("mark1").value),
    Number(document.getElementById("mark2").value),
    Number(document.getElementById("mark3").value)
  ];

  for (let i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] < 1 || marks[i] > 10) {
      alert("Lūdzu, ievadi atzīmes no 1 līdz 10 visos laukos.");
      return;
    }
  }

  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  const average = (sum / marks.length).toFixed(2);
  document.getElementById("result").innerText = `Vidējā atzīme: ${average}`;
}
