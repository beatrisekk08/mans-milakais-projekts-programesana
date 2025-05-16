function calculateAverage() {
    let inputs = document.querySelectorAll('#gradeForm input');
    let grades = [];
    
    for (let i = 0; i < inputs.length; i++) {
        let value = parseFloat(inputs[i].value);
        
        if (isNaN(value) || value < 1 || value > 10) {
            alert("Lūdzu, ievadiet skaitļus no 1 līdz 10 visos laukos.");
            return;
        }
        
        grades.push(value);
    }

    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
