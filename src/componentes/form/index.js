import React, { useState } from 'react'
import Grid from '../Grid';
import * as C from "./styles"

export const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("")//descrição
    const [amount, setAmount] = useState("")//valor
    const [isExpense, setExpense] = useState("")//saídas

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction)

        setDesc("");
        setAmount("")
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>descrição</C.Label>
                    <C.Input value={desc}
                        onChange={(e) => setDesc(e.target.value)}></C.Input>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rExpense'>Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>

            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};
