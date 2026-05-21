"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function ProjectsUnity() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
      contentfulClient.getEntry("69oeVLZNtD31EzkegDC3JY")
        .then((e) => 
        {
          const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
          setData(entries)
        })
    }

    return (
      <main>
          <CategoryHeader thumbImage="thumbs/ProjectsUnity.png" title="Projects in Unity" >
            <h2>Personal projects made specifically in Unity, most in URP with a few in HDRP.</h2>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default ProjectsUnity