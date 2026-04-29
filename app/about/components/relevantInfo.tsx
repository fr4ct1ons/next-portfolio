import React, { ReactNode } from 'react'
import styles from "./relevantInfo.module.css"
import Image from 'next/image'

function RelevantInfo(props: {imgHref?: string, title:string, imgSrc?: string, children: ReactNode}) {
  return (
    <div className={styles.relevantInfo} style={props.imgSrc == undefined? ({display: "flex", justifyContent: "right"}) : ({})}>
      {props.imgSrc == undefined? ("") : (
        <div className='flex items-center'>
            <a href={props.imgHref}>
                <Image alt={props.imgHref as string} src={props.imgSrc} height={512} width={512} />
            </a>
        </div>
      )}
        
        <div className={styles.text}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    </div>
  )
}

export default RelevantInfo