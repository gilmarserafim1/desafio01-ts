import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }


    getLoan = (value: number): void => {
        console.log(`Emprestimo no valor de R$${value} direto para conta corrente.`)
        this.deposit(value);
    }
}
