import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ButtonComp({type, color, icon, onClickFunction}) {
  return (
    <button type={type} onClick={()=>onClickFunction()} className={`hover:cursor-pointer border-2 bg-${color}-300  hover:scale-110  text-${color}-600 hover:bg-{color}-400 rounded-[50%] h-[40px] w-[40px]`}><FontAwesomeIcon icon={icon} /></button>
  )
}

export default ButtonComp