function personAccount(){
    let firstname = 'pallavi';
    let lastname = 'sharma';
    let incomes = 10000;
    let expenses = 9000;
    function totalIncome(){
        incomes = incomes+1000;
    } 
    function totalExpense(){
        expenses = expenses+1000;
    }
    function accountInfo(){
        return firstname+lastname;
    }
    function addIncome(){
        return incomes+2000;
    }
    function addExpense(){
        return expenses+500;
    }
    function accountBalance(){

    }
}