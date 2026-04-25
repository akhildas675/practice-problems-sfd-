class ActivityTracker {
  logActivity(type: string, data: any): void {
    if (type === "STEPS") {
      console.log(`Steps logged: ${data.steps}`);
      // save to database
    }
    if (type === "WATER") {
      console.log(`Water logged: ${data.ml}ml`);
      // save to database
    }
    if (type === "SLEEP") {
      console.log(`Sleep logged: ${data.hours}hrs`);
      // save to database
    }
  }
}



class Steps{
  cal(data:any){
    console.log(`Steps logged: ${data}`);
  }
}
class Sleep{
  cal(data:any){
    console.log(`Sleep logged: ${data}`);
  }
}
class Water{
  cal(data:any){
    console.log(`Water logged: ${data}`);
  }
}


const steps = new Steps()
const sleep = new Sleep()
const water = new Water()



sleep.cal(12)
steps.cal(12)
water.cal(12)