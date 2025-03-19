"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import axios from 'axios'

function OneLonelyOutpost() {
    const [data, setData] = useState<CategoryEntry[]>([])

    if(data.length <= 0)
    {
        axios.get("https://raw.githubusercontent.com/fr4ct1ons/portfolio-contents/refs/heads/main/OLO/OLO.json")
        .then((e) => 
        {
            setData(e.data)
        })
    }

    return (
    <main>
        <CategoryHeader thumbVideo="/thumbs/OLO.webm" title="One Lonely Outpost" >
            <p>One Lonely Outpost is a farming sim set in space that mixes 3D graphics with 2D pixel art. In this game, you arrive on a desolate, inhabitable planet and must create a thriving community.</p>
            <p>In this game, I worked as a tech artist, from April 2022 to October 2023. I worked with shaders, visual effects, lighting, post processing, vegetation and rendering in general.</p>
            <p>Below you can see some of the {"(various)"} works I have made in this game.</p>
        </CategoryHeader>
        <ProduceGalleryPage entries={data} />
    </main>
  )
}

export default OneLonelyOutpost