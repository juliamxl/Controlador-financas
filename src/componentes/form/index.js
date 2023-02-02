import React, { useState } from 'react'
import * as C from "./styles"

export const Form = () => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState("")

    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if (amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}></C.Input>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type= "number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
            </C.Container>
        </>
    );
};
