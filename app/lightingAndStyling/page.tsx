"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function LightindAndStyling() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])
    
    if(data.length <= 0)
    {
      contentfulClient.getEntry("iJm4oAIdrbwg23t1jgrtw")
      .then((e) => 
      {
        const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
        setData(entries)
      })
    }

    return (
      <main>
          <CategoryHeader thumbImage="/thumbs/SnowForestMorning.png" title="Light and style experiments" >
            <p>Sometimes I want to try out to create a scene with a specific effect, style or type of lighting in mind, and not necessarily using my own 3D models.</p>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default LightindAndStyling