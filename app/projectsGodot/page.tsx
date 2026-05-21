"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function ProjectsGodot() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
      contentfulClient.getEntry("6na2kwAVndYCxG1BV6l5Qe")
        .then((e) => 
        {
          const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
          setData(entries)
        })
    }

    return (
      <main>
          <CategoryHeader thumbImage="thumbs/ProjectsGodot.png" title="Projects in Godot" >
            <h2>Personal projects made specifically in Godot. Admittedly the list is small, but growing!</h2>
          </CategoryHeader>
          <ProduceGalleryPage entries={data} />
      </main>
    )
}

export default ProjectsGodot