"use client";

import axios from 'axios'
import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'

function VFX() {
    const [data, setData] = useState<CategoryEntry[]>([])

    if(data.length <= 0)
    {
        axios.get("https://raw.githubusercontent.com/fr4ct1ons/portfolio-contents/refs/heads/main/VisualEffects/VisualEffects.json")
        .then((e) => 
        {
            setData(e.data)
        })
    }

    return (
      <main>
          <CategoryHeader thumbVideo="/thumbs/VFX.webm" title="Visual Effects" >
            <p>These are some visual effects I have created. They were created in Unreal and Unity, with the support of Blender, Substance Painter etc.</p>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default VFX