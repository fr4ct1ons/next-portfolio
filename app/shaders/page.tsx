"use client";

import axios from 'axios'
import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'

function Shaders() {
    const [data, setData] = useState<CategoryEntry[]>([])

    if(data.length <= 0)
    {
        axios.get("https://raw.githubusercontent.com/fr4ct1ons/portfolio-contents/refs/heads/main/Shaders/Shaders.json")
        .then((e) => 
        {
            setData(e.data)
        })
    }

    return (
      <main>
          <CategoryHeader thumbVideo="/thumbs/Shaders1.webm" title="Shaders" >
            <p>These are some shaders I have created. They were created in Unreal and Unity.</p>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default Shaders