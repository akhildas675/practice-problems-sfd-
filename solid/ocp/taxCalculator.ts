interface TaxAmount{
    taxPay():number
}

class TaxInIndia implements TaxAmount{
    taxPay(): number {
        console.log("India Tax applied")
        return 18
    }
}
class TaxInUSA implements TaxAmount{
    taxPay(): number {
        console.log("USA Tax applied")
        return 10
    }
}
class TaxInUK implements TaxAmount{
    taxPay(): number {
        console.log("UK Tax applied")
        return 20
    }
}


class TaxProvider{
    calculate(tax:TaxAmount){
        tax.taxPay()
    }
}

const service = new TaxProvider()

service.calculate(new TaxInIndia)
service.calculate(new TaxInUK)
service.calculate(new TaxInUSA)