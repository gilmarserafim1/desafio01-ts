import { CashbackAccount } from './class/CashbackAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// deposito aceito
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(150);
peopleAccount.withdraw(50);


// deposito não aceito
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(50);
companyAccount.withdraw(100);

//emprestimo
companyAccount.getLoan(100);

// deposito com cashback
const cashbackAccount: CashbackAccount = new CashbackAccount('Gilmar', 30);
cashbackAccount.deposit(100);
