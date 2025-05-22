document.getElementById("calculator-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let grades = document.getElementById("grades").value.split(",").map(Number);
  let weights = document.getElementById("weights").value.split(",").map(Number);

  if (grades.length !== weights.length) {
    alert("Atzīmju un svaru skaitam jāsakrīt!");
    return;
  }

  let totalWeight = 0;
  let weightedSum = 0;

  for (let i = 0; i < grades.length; i++) {
    if (isNaN(grades[i]) || isNaN(weights[i])) {
      alert("Ievadiet tikai skaitļus!");
      return;
    }
    weightedSum += grades[i] * weights[i];
    totalWeight += weights[i];
  }

  let average = weightedSum / totalWeight;
  document.getElementById("result").textContent = "Vidējā atzīme: " + average.toFixed(2);
});
