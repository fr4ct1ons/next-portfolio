"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import axios from 'axios';
import { ProduceGalleryPage } from '@/utils/produceGallery';

function Tools() {
    const [data, setData] = useState<CategoryEntry[]>([])

    if(data.length <= 0)
    {
        axios.get("https://raw.githubusercontent.com/fr4ct1ons/portfolio-contents/refs/heads/main/ToolsAndCode/ToolsAndCode.json")
        .then((e) => 
        {
            if(data.length <= 0)
            {
                setTimeout(() => setData(e.data), 3000)
            }
            else
            {
                setData(e.data)
            }
        })
    }

  return (
    <main>
        <CategoryHeader thumbImage='thumbs/CodeNTools.png' title="Tools & Code" />
        <p>These are some of the engine tools and coding projects I have written.</p>
        <p>They are all hosted on my <a href="https://github.com/fr4ct1ons">GitHub</a> profile. Most of my repositories on GitHub are college projects or personal projects, but feel free to check it out if you're interested.</p>
        <ProduceGalleryPage entries={data} />
    </main>
  )
}

export default Tools