function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    if (bmi <18.5){
        return "UNDERWEIGHT"
    }
    if (bmi >=18.5 && bmi < 25){
        return "NORMAL"
    }
    if (bmi >=25 && bmi < 30){
        return "OVERWEIGHT"
    }
    if (bmi >=30 && bmi < 35){
        return "OBESE"
    }
    if (bmi >35){
        return "EXTREMELY OBESE"
    }
}