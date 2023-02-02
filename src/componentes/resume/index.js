import React from 'react'
import { ResumeItem } from '../resumeItem/index.js'
import * as C from './styles.js'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value = "1000"/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value = "1000"/>
      <ResumeItem title="Total" Icon={FaDollarSign}/>
    </C.Container>
  )
}
