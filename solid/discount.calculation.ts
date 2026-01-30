
class DiscountCalculator {
  calculateDiscount(type: string, amount: number): number {
    if (type === "STUDENT") return amount * 0.2;
    if (type === "SENIOR") return amount * 0.3;
    return 0;
  }
}
interface Discount {
  calculate(amount: number): number;
}
class Senior implements Discount {
  calculate(amount: number): number {
    return amount * 0.2;
  }
}
class Student implements Discount {
  calculate(amount: number): number {
    return amount * 0.3;
  }
}
function applyDiscount(rate: Discount, amount: number) {
  return amount - rate.calculate(amount);
}
console.log(applyDiscount(new Senior(), 100));
console.log(applyDiscount(new Student(), 200));
