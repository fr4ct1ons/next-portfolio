"use client";
import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function Models() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])
    
    if(data.length <= 0)
    {
      contentfulClient.getEntry("7BmNa7VXuLJZXqODqZ7zJ2")
      .then((e) => 
      {
        const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
        setData(entries)
      })
    }

    return (
      <main>
          <CategoryHeader thumbImage="/thumbs/3DModels.png" title="3D models" >
            <p>A few 3D models I have made. While I prefer to focus on visual effects and shaders, I do 3D modelling when needed. </p>
            <p>As for my tools, I use Blender and Substance Painter/Designer with rendering in Unreal.</p>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default Models