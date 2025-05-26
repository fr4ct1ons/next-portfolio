"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery';
import { contentfulClient } from '@/utils/contentful/contentful';

function Tools() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data != undefined && data.length <= 0)
    {
        contentfulClient.getEntry("2UkBXJiw56j6QohWblFJOB")
        .then((e) => 
        {
            const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
            setData(entries)
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