import React from 'react'
import { ResumeItem } from '../resumeItem/index.js'
import * as C from './styles.js'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value = {income}/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value = {expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}
