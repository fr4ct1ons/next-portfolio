import React from 'react'
import style from "./educationItem.module.css"
function EducationItem(props: {title: string, period: string, institution: string }) {
  return (
    <div className={style.item} >
        <h1>{props.title}</h1>
        <h2>{props.institution}</h2>
        <h3>{props.period}</h3>
    </div>
  )
}

export default EducationItem