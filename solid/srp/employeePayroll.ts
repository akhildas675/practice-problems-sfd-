class EmployeePayroll{
    constructor(
        public readonly id:string,
        public readonly employeeName:string,
        public salary:number,
        public status: "Success" |"Failed"="Success"
    ){}

}

    class EmployeePayrollRepository{
        save(salary:EmployeePayroll):void{
            console.log("Saving Salary")
        }
    }


    class SalaryEmailService{
        save(salary:EmployeePayroll):void{
            console.log("salary email service")
        }
    }

    class ExportPaySlipService{
        send(salary:EmployeePayroll):void{
            console.log("send export....")
        }
    }

    class EmployeePayRollService{
        constructor(
            private repo:EmployeePayrollRepository,
            private emailService:SalaryEmailService,
            private exportService:ExportPaySlipService,
        ) {
            
        }

        pay(salary:EmployeePayroll):void{
            console.log("Salary paid")
            this.repo.save(salary)
            this.emailService.save(salary);
            this.exportService.send(salary)
        }
        
        calculateSalary(salary:number):number{
            return salary
        }

        calculateBonus(baseSalary:number,bonus:number):number{
            return baseSalary+bonus
        }

    }


    const salary = new EmployeePayroll("lfadasf","ME",23422)


    const paid = new EmployeePayRollService(
        new SalaryEmailService,
        new EmployeePayrollRepository,
        new ExportPaySlipService,
    )

    paid.pay(salary);
    