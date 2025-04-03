import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ButtonComp({type, color, icon, onClickFunction}) {

  const colorClasses = {
    green: "bg-green-300 text-green-600 hover:bg-green-400",
    blue: "bg-blue-300 text-blue-600 hover:bg-blue-400",
    red: "bg-red-300 text-red-600 hover:bg-red-400",
  };

  return (
    <button type={type} onClick={()=>onClickFunction()} className={`hover:cursor-pointer border-2 ${colorClasses[color]} hover:scale-110 rounded-[50%] h-[40px] w-[40px]`}><FontAwesomeIcon icon={icon} /></button>
  )
}

export default ButtonComp