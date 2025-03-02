import Image from 'next/image'
import React from 'react'

function ScrollForMore() {
  return (
    <div style={{zIndex: "3000"}}>
        <p style={{textAlign: "center", fontWeight: "600", fontSize: "28px"}}>SCROLL FOR MORE</p>
        <Image className='size-12 mx-auto' width={512} height={512} alt='Arrow pointing Down' src="/Arrow.png" />
    </div>
  )
}

export default ScrollForMore