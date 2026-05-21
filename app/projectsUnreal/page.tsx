"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function ProjectsUnreal() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
      contentfulClient.getEntry("4e8JsqZnFD3AdrEPEX6Lrg")
        .then((e) => 
        {
          const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
          setData(entries)
        })
    }

    return (
      <main>
          <CategoryHeader thumbImage="thumbs/ProjectsUnreal.png" title="Projects in Unreal" >
            <h2>Personal projects made specifically in Unreal 5.</h2>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default ProjectsUnreal