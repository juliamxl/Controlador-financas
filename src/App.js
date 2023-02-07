import React, {useState, useEffect} from "react";
import { Form } from "./componentes/form";
import Header from "./componentes/header";
import { Resume } from "./componentes/resume";
import Global from "./styles/global";

const App = () => {
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    )

    const [income, setIncome] = useState(0); //entrada
    const [expense, setExpense] = useState(0); //saida
    const [total, setTotal] = useState(0); //total

    useEffect(() => {
        const amountExpense = transactionsList
        .filter((item) => item.expense)//se é saída
        .map((transaction) => Number(transaction.amount))

        const amountIncome = transactionsList
        .filter((item) => !item.expense)//se não é saída
        .map((transaction) => Number(transaction.amount))

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)// soma todas as saídas
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)// soma todas as entradas

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction]

        setTransactionsList(newArrayTransactions)
        
        localStorage.setItem("transaction", JSON.stringify(newArrayTransactions));
    };

    return (
        <>
            <Header></Header>
            <Resume income={income} expense={expense} total={total}/>
            <Form handleAdd={handleAdd}></Form>
            <Global />
        </>
    )

};

export default App;