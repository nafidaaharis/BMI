document.getElementById("calculateBtn").addEventListener("click", function() {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    if (!isNaN(age) && !isNaN(weight) && !isNaN(height)) {
      const bmi = weight / (height * height);
      let category = "";
  
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
  
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = 'over weight';
      resultDiv.innerHTML = 'normal weight';
    }
  });
 