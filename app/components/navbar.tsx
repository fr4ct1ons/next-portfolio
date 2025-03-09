"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

function Navbar() {

  const images = [
    {
      img:"/social-media/ArtStation-icon.png",
      key: "https://www.artstation.com/fr4ct1ons"
    },
    {
      img:"/social-media/Github-icon.png",
      key: "https://github.com/fr4ct1ons"
    },
    /*
    {
      img:"/social-media/Itchio-icon.png",
      path: "/"
    },
    */
    {
      img:"/social-media/Sketchfab-icon.png",
      key: "https://sketchfab.com/fr4ct1ons"
    },
    {
      img:"/social-media/Twitter-icon.png",
      key: "https://twitter.com/fr4ct1ons"
    },
    {
      img:"/social-media/Bsky-icon.png",
      key: "https://bsky.app/profile/fr4ct1ons.bsky.social"
    },
    
  ]

  return (
    <div style={{}}>
      <div className={styles.navbar + ' py-4 px-64 space-x-4 max-w-128 min-w-96'}>
              <Link style={{color: "#ff5032"}} href={"/"}>Gabriel Lucena</Link>
              <div className={styles.links + " space-x-16"}>
                <Link href={"/"}>ABOUT</Link>
                <div>
                  <Link href={""} className='pointer-events-none'>BLOG</Link>
                  <p style={{position: "absolute", color: "yellow", fontSize: "16px", translate: "32px -40px", userSelect: "none", rotate: "15deg"}}><i>(soon!)</i></p>
                </div>
              </div>
              <div className={styles.links + " space-x-4"}>
                {images.map((e) => {
                  return (
                  <Link href={e.key}>
                    <Image width={720} height={720} src={e.img} alt={e.img} loading='eager'/>
                  </Link>)
                })}
              </div>
      </div>
    </div>
  )
}

export default Navbar