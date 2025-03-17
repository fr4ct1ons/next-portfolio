import Image from 'next/image'
import React from 'react'
import styles from "./skillCard.module.css"

interface SkillCardProps 
{
    name: string;
    imageSrc: string;
}

function SkillCard(props: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
        <div className={styles.text}>
            <p>{props.name}</p>
        </div>
        <Image alt={props.name} width={256} height={256} src={props.imageSrc} />
    </div>
  )
}

export default SkillCard