import { DioAccount } from "./DioAccount";

export class CashbackAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    override deposit = (value: number): void => {
        const cashback = value * 0.1;
        console.log(`Deposito com cashback de R$${cashback.toFixed(2)}`);
        super.deposit(value + cashback);  
    };

}