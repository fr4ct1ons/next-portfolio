import React from 'react'
import style from "./footer.module.css"

function Footer() {
  return (
    <div className={style.footer}>
        <p>fr4ct1ons - Gabriel Lucena - 2025</p>
        <p>Made with <a style={{textDecoration: "underline"}} href='https://nextjs.org/'>Next.js</a></p>
        <p> As of March 2025, the contents provided on this website cannot be used, downloaded nor utilized in any way or form for the constructions of datasets or training of any form of large language models, generative AIs or machine learning models. </p>
    </div>
  )
}

export default Footer