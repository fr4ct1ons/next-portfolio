"use client";

import React, { useState } from 'react'
import CategoryHeader from '../components/categoryHeader'
import { ProduceGalleryPage } from '@/utils/produceGallery'
import { contentfulClient } from '@/utils/contentful/contentful';
import { log } from 'console';

function Combotronica() {
    const [data, setData] = useState<ContentfulGalleryItem[]>([])

    if(data.length <= 0)
    {
        contentfulClient.getEntry("6N81i12T9319ZrmpXji3Pf")
        .then((e) => 
        {
            const entries: ContentfulGalleryItem[] = e.fields.media as ContentfulGalleryItem[]
            setData(entries)
        })
    }

    return (
    <main>
        <CategoryHeader thumbVideo="/thumbs/CombotronicaFullVideo.webm" title="Combotronica" />
            <p>COMBOTRONICA is a 2D roguelike deck-building game where you must build chains of tiles with similar numbers or colors, where you can buy items to improve your deck and game run. It's currently available on <a href="https://store.steampowered.com/app/3902340/COMBOTRONICA/">Steam</a>.</p>
            <p>In this game, I worked as a tech artist, from August 2025 to March 2026. I worked with shaders, visual effects, animations, user interface. I also helped with coding when needed. Here is some of my work on this project.</p>
            <p>One of my first works I made in this project was the amulet destruction visual effect. It uses a custom shader applied on the amulet sprite and on its shadow.
                Being one of my first visual effects, I was still getting used to the project - In this case, I was getting used to the customized animation system.
                Before I joined the team, all of the animations were to be made with C# code instead of Unity's animators. This is because the animations were meant to be serialized, so the customized animators' states were to be stored on the save file.
                The effect may change color depending on the context. Below are some of the videos of the animations. I also made the token usage animation on the right.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/0XihLBT2puE?si=nSVLBPtZuBKuFBnF" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>Another animation I made is the energy bonus {"(when the player gains extra energy)"} and XMult {"(when the multiplier itself is multiplied by a value)"} animations. 
                There was already a system in place for rendering the lines used on these effects, so I just used it for rendering the green and red lines. 
                The red ray is a part of the amulet itself, while the green energy burst is pooled and can be used by other game elements.
                You can see a video of those effects in action. I also made the token usage animation on the right and the victory screen that appears thereafter.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/uCHLuToqSsM?si=TKSNYjfFCxZwXxO2" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>Since I mentioned the victory screen, I worked on most of the user interface of Combotronica. Some of them used the customized animation system I mentioned before when required for gameplay, others were made with coroutines.
                As to why coroutines were used, there's no particular reason why they were used instead of Unity animator components. An artist would layout the interface screens on a different tool and I'd replicate them in Unity based on an image file.
                Below you can watch a video on some of the UIs in the project.
            </p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", height: "40vh"}}>
                <iframe className="ytVideoRow" 
                src="https://www.youtube.com/embed/p8HaI_vBCSw?si=qbY9we99o0l2XBaf" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                
                <iframe className="ytVideoRow" 
                src="https://www.youtube.com/embed/A4eZJIBTKbU?si=1aBnN6tUFZPCGEwg" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            
            <p>Related to the UI, I also made the hint systems used for tutorials in-game. Instead of having a tutorial per se, the game has designed to have a dynamic system that explains the game depending on the player's actions.
                I made a somewhat simple system where for each hint, a designer can specify when the hint is meant to be displayed, when and where its pointers {"(arrows, text boxes etc)"} should be displayed and twhen the character's dialogue has to change and it takes care of the whole thing.
                Here's a video with some of the hints being activated.
            </p>
            
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", height: "40vh"}}>
                <iframe className="ytVideoRow" 
                src="https://www.youtube.com/embed/_xjDV2bkSzA?si=o1LBpTCGIl7HOYNC" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>

                <iframe className="ytVideoRow" 
                src="https://www.youtube.com/embed/vBX24flEBeg?si=XzNm_qoX1x45yXFs" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            
            <p>You may have also noticed on some of the videos some "light effects" that may have played on the background, such as on the victory screen. Along with the background sprite, there is a shader effect that is played on top of it.
                The shader is used on a material on a sprite renderer, which is then rendered to a render texture. That texture is then sampled on the background sprite renderer's material. The render texture was used to sample the effect on a smaller
                resolution and also to allow for smooth transitions between different shader effects on the same background. As for the effect themselves, my programming lead and I searched on Shadertoy for different shaders for us to use, but later on I found out
                that the shaders uploaded to that website weren't allowed for commercial use {"(unless stated otherwise)"}, so I created my own effects. Here's a showcase of some of the effects. 
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/7VOXUvLnly0?si=arybW4lPFJlRAY4G" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>And lastly, I also made the main menu intro animation, including the Mr. Square animation. To be frank here, this was one of the most challenging tasks for me to work on - Rigging the character was okay, 
                I had done rigging enough times in 3D before that it felt naturally to me, and each body part was neatly separated and organized in layers on a .psd file. The challenging part was doing the animations - 
                As I had the most experience with 3D rigging, the task of doing the animations also fell on me. Sure, I knew about the 12 principles of animation, but I never gave character animation that much attention, 
                so it was tough to make the appear animation look good and feel natural enough. Because the idle animations were somewhat simpler, they were also easier to make. After some back and forth with other team members, this is the final result.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/MAetoFssIIs?si=mnvJwNylHGKqo9oL" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>Here's a separate list with some isolated visual effects and animations I also made.</p>
            <ProduceGalleryPage entries={data} />
    </main>
  )
}

export default Combotronica