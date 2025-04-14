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
        <CategoryHeader thumbVideo="/thumbs/OLO.webm" title="One Lonely Outpost" />
            <p>One Lonely Outpost is a farming sim set in space that mixes 3D graphics with 2D pixel art released on PC, Nintendo Switch, Xbox One, PS5 and Xbox Series S/X. In this game, you arrive on a desolate, uninhabitable planet and must create a thriving community.</p>
            <p>In this game, I worked as a tech artist, from April 2022 to October 2023. I worked with shaders, visual effects, lighting, post processing, vegetation and rendering in general. Here is some of my work on this project.</p>
            <p>First off is the customization system for the player character, in which the player can change the colors of the eyes, hair, skin and jumpsuit.
                The player uses sliders to control the HSV values of the customization, which then a <b>C# script sends these values to the player character's shader</b>. 
                In the shader, a texture mask is used to apply the selected colors only on their correct parts of the sprite. In the video below you can see some of it in action.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/OXPmw_KL5bo?si=MSUP1aOwyGXC-H04" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>Another one of my contributions was the dynamic 3D tilemap system. Since we couldn't use a 2D tilemap, I wrote a system that draws the tiles on a 3D mesh that is placed on top of the overworld.
                Originally, I made this with <b>SDF math</b>, but it proved too performance-costly, so I rewrote it to use meshes instead. One script generates a <b>mesh based on every tile</b> an overworld map may have, 
                while another is used to mark on a mask texture which tiles should be rendered. Since the mask and UVs match perfectly the corners and center of the tiles, the shader just reads from the mask
                and renders the necessary tiles. I also made the hologram effect. Below is a video of this sytem in action in-game.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/C64_-ZCLWBE?si=fTyErp_0Zl_KxROi" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>One other system that I made and that is considered one of the major features of the game is the terraforming and vegetation. 
                Because the overworld of the game maps uses 3D models instead of something like Unity terrain, the vegetation is generated separately on <b>Blender, using its particle system</b>.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/C64_-ZCLWBE?si=fTyErp_0Zl_KxROi" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            
            <p>There was also the day-night system used in the game. One point of consideration is that this system would also need to work with different weather conditions in the game {"(i.e cloudy and rainy weather, snowy and even galactic wonders!)"}
                so with this in mind, I wrote a script that uses <b>Scriptable Objects</b> with gradients and animation curves to store data such as color of the sun/moon, of the ambient lighting and even rotation of the directional light.
                This is the end result.
            </p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/C64_-ZCLWBE?si=fTyErp_0Zl_KxROi" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>I also created the custom cel shader used for the stylized in-game, which supports light smoothing, reflections and specular highlights. A similar shader is used on the character sprites.</p>
            <iframe className="ytVideo" 
            src="https://www.youtube.com/embed/OsxKQZXPNXQ?si=IB86-tnbaPru1TKi" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>

            <p>And lastly but not least, I also worked on most of the visual effects and shaders for the game. Below you can see some of them.</p>
        <ProduceGalleryPage entries={data} />
    </main>
  )
}

export default OneLonelyOutpost