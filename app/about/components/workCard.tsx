import React, { ReactNode } from 'react'
import styles from "./workCard.module.css"
import Image from 'next/image'

function WorkCard(props: {imgHref: string, imgSrc: string, game: string, studio: string, duration: string, children: ReactNode}) {
  return (
    <div className={styles.workCard}>
        <div className='flex items-center'>
            <a href={props.imgHref}>
                <Image alt={props.game} src={props.imgSrc} height={512} width={512} />
            </a>
        </div>
        <div className={styles.text}>
            <h1>{props.game}</h1>
            <h2>{props.studio}</h2>
            {props.children}
            <h3>{props.duration}</h3>
        </div>
    </div>
  )
}

export default WorkCard