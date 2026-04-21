"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function Shaders() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
      contentfulClient.getEntry("4r9AVWX55sPEcX9m703qT")
        .then((e) => 
        {
          const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
          setData(entries)
        })
    }

    return (
      <main>
          <CategoryHeader thumbVideo="/thumbs/Shaders1.webm" title="Shaders" >
            <p>These are some shaders I have created. They were created in Unreal, Unity and Godot.</p>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default Shaders