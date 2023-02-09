import * as C from "./styles.js"
import GridItem from "../GridItem"
import React from 'react'

const Grid = ({ itens, setItens }) => {
    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição </C.Th>
                    <C.Th width={40}>Valor </C.Th>
                    <C.Th width={10} alignCenter>
                        Tipo
                    </C.Th>
                    <C.Th width={10}></C.Th>
                </C.Tr>
            </C.Thead>
        </C.Table>
    )
}

export default Grid;

