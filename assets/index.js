function bmiButton() {
  // providing calculation for BMI

  let bmi;
  let weight = parseInt(document.getElementById("bmi-weight").value);
  let height = parseInt(document.getElementById("bmi-height").value);
  let results = document.getElementById("bmi-results");


  document.getElementById("bmi-weight").textContent = weight + "kg";
  document.getElementById("bmi-height").textContent = height + "cm";
  
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  results.textContent = bmi;
  if (bmi <= 18.4) {
     bmi ;
    output= "You are underweight, go eat a burger 🍔";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmi ;
    output= "Good on you, you are normal 🏅";
  } else if (bmi >= 25 && bmi <= 39.9) {
    bmi ;
    output= "Eat some veggies, take a jog, you are overweight 🏃‍♂️";
  } else {
    bmi ;
    output="Unfortunately you need to see the doctor, you are obesity, obesity is you 💀";
  }

  document.getElementById("results").innerHTML = output;

}

function restart() {
    window.location.reload();
}