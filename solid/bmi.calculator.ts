class UserService {
  calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }

  saveUser(user: any): void {
    // save user logic
  }
}



class BMICalculation {
  calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
  }
}


class BMILevel{
  calculate(bmi: number): string {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }
}


const BMIResult = new BMICalculation()
const bmiCal = new BMILevel()

const bmi = BMIResult.calculateBMI(50,165);
const bmiResult = bmiCal.calculate(bmi)

console.log(bmiResult)