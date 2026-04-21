"use client";

import React, { useState } from 'react'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';

function SteampunkShinobi() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
        contentfulClient.getEntry("a3wpI7pysyYUpXGhu9BwF")
        .then((e) => 
        {
            const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
            setData(entries)
        })
    }


    return (
    <main>
        <h1>Steampunk Shinobi</h1>
        
        <iframe className="ytVideo" 
        src="https://www.youtube.com/embed/MREKdzr5F2E?si=NHhY0upKBKxSYPkd" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>

        <p>
            After nearly the entire team was let go after working on <a href="/oneLonelyOutpost">One Lonely Outpost</a>, we started work on the prototype for Steampunk Shinobi, a rogue-like action adventure game in a dynamic and evolving world. 
            The prototype was sent to over 30+ publishers, but sadly none of them were interested in funding the game, so it was never released. 
            However, the <a href="https://store.steampowered.com/app/3284770/Steampunk_Shinobi/">Steam page</a> is still available.
        </p>

        <p>
            For Steampunk Shinobi, I worked on most visual effects for skills, attacks and environment, but I also worked with setting up post-processing and lighting. I also worked on an early version of the vegetation system.
            I have lost access to the project long ago, so most of the footage below is from the trailer.
        </p>

        <ProduceGalleryPage entries={data} />
    </main>
    )
}

export default SteampunkShinobi