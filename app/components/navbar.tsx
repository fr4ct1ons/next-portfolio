"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div style={{}}>
      <div className={styles.navbar + ' py-4 px-64 space-x-4 max-w-128 min-w-96'}>
              <Link href={"/"}>Gabriel Lucena</Link>
              <div className={styles.links + " space-x-8"}>
                  <Link href={"/"}>VFX</Link>
                  <Link href={"/"}>GAMES</Link>
              </div>
      </div>
    </div>
  )
}

export default Navbar