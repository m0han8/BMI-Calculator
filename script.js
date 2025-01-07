function calculateBMI() {
  let weightInput = document.getElementById("wei").value;
  let heightInput = document.getElementById("hei").value;

  if (!weightInput || !heightInput || isNaN(weightInput) || isNaN(heightInput)) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
    return;
  }

  let weight = parseFloat(weightInput);
  let height = parseFloat(heightInput);
  let bmi = weight / ((height / 100) * (height / 100));

  let resultText;
  if (bmi < 18.5) {
    resultText = "You're Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = "You're Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultText = "You're Overweight";
  } else {
    resultText = "You're Obese";
  }

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}: ${resultText}`;
}
