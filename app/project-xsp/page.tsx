"use client";

import React from 'react'
import Image from 'next/image';
import CategoryHeader from '../components/categoryHeader'

function ProjectXSP() {

    return (
      <main>
          <CategoryHeader thumbVideo='thumbs/ProjectXSPThumb.webm' title="Project XSP" >
          </CategoryHeader>

        <h2 style={{marginBottom: "4rem"}}>Stealth immersive sim set between two worlds: One in the present, one in the past</h2>

        <p style={{marginBottom: "4rem"}}><u>TL;DR:</u> Project XSP is a personal project of mine made in Unreal Engine 5. It's a low-poly stealth immersive sim set in a underground military base where the player can at any time travel back and forth in time. The main inspirations are Metal Gear Solid, Deus Ex, Deathloop and Dishonored 2, specially the A Crack in the Slab mission. Below are some videos of <u>visual effects, 3D models, animations and UI</u> I made specificallyr for the game.</p>

        <p>Project XSP is a personal project I'm making in Unreal Engine 5 more as a demo than an actual finished game.</p>

        <p>In this 3D low-poly stealth based immersive simulator, the player is sent to an underground military base to investigate a science experiment gone wrong where the soldiers in the base have all turned into zombie-like creatures and stop it... by any means necessary.</p>

        <p>As a new member of the Cross Space-time Partition, the protagonist has a very unique tool at their disposal: The XS-Swapper, which allows them to, in the same place, travel back and forth between two moments in time, all with the click of a button. </p>

        <p>The game is inspired both by classics like Metal Gear Solid and Deus Ex, but also by more modern games like Dishonored 2, Deus Ex: Human Revolution and Deathloop. Specifically, the underground military base setting comes from Metal Gear Solid 1 and 2, the FPS gameplay comes from Deathloop and, perhaps more obviously, the time travel concept comes from the "A Crack in the Slab" mission from Dishonored 2 - Definitely my favourite mission in probably any game of this genre!</p>

        <p>When I started this project, I decided to work on the time travel aspect first, as it is the center piece of the game. I made a system where the map is divided in two parts: One in the present {"(where the player is first spawned)"}, another one in the past. When the player is on Space A, Space B has an object with a SceneCapture2D component that mimics the player's camera but in relation to Space B. A capsule collider is then used to check if a swap/teleport is possible or not. Here's an example of how the actual map looks like.</p>
        <Image className='w-[100%] mx-auto my-8' width={1280} height={720} alt={"Two similar levels"} src={"project-xsp/TwoWorlds.jpg"}/>

        <p>After that, I set off to make the swap visual effects. I wanted to pass off the feeling of the player being "pulled back" when travelling backwards in time and similarly, "pushed forward" when travelling forward in time and additionally, the motion is so strong that the protagonist feels like passing out. Eventually I read somewhere that a strong enough forward G-Force, depending on the direction, can make either a person feel like they're seeing everything red or they'll feel like they're blacking out, so I made the effects accordingly. </p>
        <p>The effects were made using two separate post processing components and a timeline that dictates the blend weight of the post processing component. Which post processing stack is used on the timeline depends on which "direction" the player is travelling to. Here's the end result.</p>
        
        <iframe className="ytVideo" 
        src="https://www.youtube.com/embed/uyecwdnMQSc?si=KoVknT4mTAqHYWST" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>

        <p>With that done, I began work on the more FPS parts of the game - First I coded a simple Modular Hitscan Weapon Actor which I'll use as a base for all hitscan weapons. It has variables for magazine sizes, max ammo amount and later on, I'll add aim spread, no. of line traces, reload types and automatic mode, for usage in weapons like automatic rifles and shotguns. </p>
        <p>With the weapon system coded, I made a 3D model for the pistol, the protagonist's arms for use in the first person perspective camera and some animations for both 3D models. I then implemented the animations with an Animation Blueprint and a state machine. In the future I will add aim sway and offset the mesh based on things like jumps and movement.</p>
        <p>And last but definitely not least, specially for a VFX artist like myself, I added the shooting visual effects. Maybe the handgun's design doesn't make it very clear, but other than being silenced, this pistol fires subsonic rounds and uses eletromagnetics for a myriad of reasons. I spent some time researching how muzzle flashes work {"(specially on silenced, subsonic firearms and coil guns)"} and while I could make a very flashy and smoky effect, I wanted to prioritize realism above flashy visuals, so I made a pretty timid muzzle flash with no smoke. After all, this is a stealth game, and the guards would see a muzle flash from afar!</p>
        <p>Finally, here's a video showcasing the animations.</p>

        <iframe className="ytVideo" 
        src="https://www.youtube.com/embed/Ln4-RoDRrYU?si=fm_0F88Lh-OY5Rr0" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>

        <p>Now, regarding the visuals. When brainstorming ideas for this project, I did not want to invest too much time on 3D modelling and all that. As much as this project also serves to showcase my 3D art skills, I wanted to focus on development inside Unreal, so I set on low-poly art for this game. I set on a PSX-ish style {"(see where the title comes from?)"} as that would not be too time consuming.</p>
        <p>However, I wasn't interested in being faithful to PSX graphics because I was worried it would be too limiting graphically, so I settled with just a minor similarity. It may be more accurate to say it looks more like a pixelated version of Deus Ex, as that featured filtering, which I disabled completely.</p>
        <p>That all said, I still want to make the lighting and visual effects for this project really pleasing. And part of that involved an option for enabling and disabling Lumen. The previous videos showed the game being rendered in 360p as the actual game resolution without Lumen. Here's how it looks like in 1080p with Lumen enabled.</p>
      
        <iframe className="ytVideo" 
        src="https://www.youtube.com/embed/NpnSVYNe-qc?si=v2wBMpYcl0v0mPLu" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
      
      </main>
    )
}

export default ProjectXSP