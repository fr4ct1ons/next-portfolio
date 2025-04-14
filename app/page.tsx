'use client'

import GalleryLink from "./components/GalleryLink";
import ScrollForMore from "./components/scrollForMore";
import styles from "./page.module.css"
import { isMobile } from "react-device-detect";
import { MobileConditionalString, MobileConditionalStyle } from "@/utils/mobileClass";

interface Category
{
  key: string;
  videoPath?: string;
  imagePath?: string;
  href: string;
}

export default function Home() {

  const categories: Category[] = [
    {
      key: "Visual Effects",
      href: "/vfx",
      videoPath: "/thumbs/VFX.webm"
    },
    {
      key: "Shaders",
      href: "/shaders",
      videoPath: "/thumbs/Shaders1.webm"
    },
    {
      key: "3D Models",
      href: "https://www.artstation.com/fr4ct1ons",
      imagePath: "/thumbs/3DModels.png"
    },
    
  ]

  return(
    <div>

      <div className="videoContainer">
        <div className="fgVideo">
          <div>
            <h1 className={MobileConditionalString("text-4xl mt-[8vw] my-4", "text-7xl mb-8")}>Hi, I'm Gabriel!</h1>
            <h2 className={MobileConditionalString("text-m my-4", "text-2xl")}>My works over 4+ years as a tech artist</h2>
          </div>

          <iframe
            className="ytEmbedVideo"
            src="https://www.youtube.com/embed/pjLLVKGgQV8?si=vtx63dzzdRtWTSTN"
            title="YouTube video player"
            style={MobileConditionalStyle({width: 240, height:135},{width: 640, height:360})}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
          
        </div>

        {isMobile? 
        ""
        :
        <div style={{position: "absolute", width: "100%", marginTop: "35%"}}>
          <ScrollForMore />
        </div>
        }
        
        <video className="bgVideo" muted loop autoPlay playsInline poster="/OLO-Still-4x3-Poster.png">
          <source src={MobileConditionalString("/OLO-Still-4x3.webm", "/OLO-Still-Ultrawide.webm")} type="video/webm" />
        </video>
      </div>
      <main>
        <p>Hi there! My name is Gabriel Lucena and I'm a tech artist from Brazil. Welcome to my portfolio!</p>
        <p>I'm a tech artist with experience working on shaders, lighting and visual effects, though I enjoy art, programming and rendering in general. You can read more about me on the <a href="/about">About</a> page.</p>
        <p>I have a bachelor's degree in Information Technology and am pursuing a Master's in Information Technology. I have experience with Unity, Unreal and web development, as well as C# and C++.</p>
        <p>As for my previous work experiences, I have worked on the RPG <i><a href="https://store.steampowered.com/app/698700/Rise_of_the_Third_Power/">Rise of the Third Power</a></i>, the farming sim <i><a href="https://store.steampowered.com/app/1465550/One_Lonely_Outpost/">One Lonely Outpost</a></i> and the action adventure game <i><a href="https://store.steampowered.com/app/3284770/Steampunk_Shinobi/">Steampunk Shinobi</a></i>.</p>
        <p>This site is still a work in progress. If you want, you can check out my <a href="https://fr4ct1ons.github.io/">old portfolio</a> or <a href="https://www.artstation.com/fr4ct1ons">ArtStation</a>.</p>

        <h3>Previous works</h3>
        <div className={styles.grid}>
          <GalleryLink videoSrc={"/thumbs/OLO.webm"} title={"One Lonely Outpost"} href={"/oneLonelyOutpost"}/>
          <GalleryLink videoSrc={"/thumbs/SPS.mp4"} title={"Steampunk Shinobi"} href={"https://store.steampowered.com/app/3284770/Steampunk_Shinobi/"}/>
          <GalleryLink imageSrc={"/thumbs/RiseThirdPower.png"} title={"Rise of the Third Power"} href={"https://fr4ct1ons.github.io/games/rise-third-power/"}/>
        </div>

        <h3>Personal projects</h3>
        <div className={styles.grid}>
          {categories.map((e) => {
            return <GalleryLink videoSrc={e.videoPath} imageSrc={e.imagePath} title={e.key} href={e.href}/>
          })}
        
        </div>

      </main>
    </div>
  )
}
