export abstract class DioAccount {

    private readonly name: string;
    private readonly accountNumber: number;

    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit(value: number): void {
        if(this.status){
            this.balance += value;
            console.log(`Voce depositou R$${value.toFixed(2)} - Novo saldo: R$${this.balance.toFixed(2)}`);
        }
    }

    withdraw = (value: number): void => {
        if(this.status){
            if(this.balance > value){
                this.balance -= value;
                console.log(`Voce sacou R$${value.toFixed(2)} - Novo saldo: R$${this.balance.toFixed(2)}`);
            } else {
                console.log('ERRO! Valor de saque maior que saldo.');
            }
        }
    }

    protected getBalance = (): number => {
        return Number(this.balance.toFixed(2));
    }

    protected setBalance = (value: number):void => {
        this.balance = value;
    }

    protected validateStatus = (): boolean => {
        if(this.status) {
            return this.status;
        } else {
            console.log('Conta inválida!');
            return false;
        }
    }
}
