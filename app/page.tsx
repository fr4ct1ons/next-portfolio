'use client'

import Image from "next/image";
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
      href: "https://fr4ct1ons.github.io/vfx/",
      videoPath: "/thumbs/VFX.webm"
    },
    {
      key: "Shaders",
      href: "https://fr4ct1ons.github.io/vfx/",
      videoPath: "/thumbs/Shaders1.webm"
    },
    {
      key: "One Lonely Outpost",
      href: "https://fr4ct1ons.github.io/games/one-lonely-outpost/",
      videoPath: "/thumbs/OLO.webm"
    },
    {
      key: "3D Models",
      href: "https://www.artstation.com/fr4ct1ons",
      imagePath: "/thumbs/3DModels.png"
    },
    {
      key: "Steampunk Shinobi",
      href: "https://store.steampowered.com/app/3284770/Steampunk_Shinobi/",
      videoPath: "/thumbs/SPS.mp4"
    },
    {
      key: "Cel Shading",
      href: "https://www.artstation.com/artwork/a00YKX",
      videoPath: "/thumbs/CelShader.webm"
    },
    {
      key: "Water Shaders",
      href: "https://www.artstation.com/artwork/mAAAw1",
      imagePath: "/thumbs/Water.png"
    },
    {
      key: "Rise of the Third Power",
      href: "https://fr4ct1ons.github.io/games/rise-third-power/",
      imagePath: "/thumbs/RiseThirdPower.png"
    },
    {
      key: "Post Processing",
      href: "https://fr4ct1ons.github.io/vfx/cyberpunk-camera-zoom-recreation/",
      videoPath: "/thumbs/PostProcessing1.webm"
    },
    {
      key: "Environment and Lighting",
      href: "https://www.artstation.com/artwork/NqqyxD",
      videoPath: "/thumbs/EnvLighting.webm"
    },
    {
      key: "Liquid Simulation",
      href: "/liquidSim",
      videoPath: "/thumbs/Liquid.webm"
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
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
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
        <p>I'm a tech artist with experience working on shaders, lighting and visual effects, though I enjoy art and programming in general.</p>
        <p>I have a bachelor's degree in Information Technology and am pursuing a Master's in Information Technology. I have experience with Unity, Unreal and web development, as well as C# and C++.</p>
        <p>As for my previous work experiences, I have worked on the RPG <i><a href="https://store.steampowered.com/app/698700/Rise_of_the_Third_Power/">Rise of the Third Power</a></i>, the farming sim <i><a href="https://store.steampowered.com/app/1465550/One_Lonely_Outpost/">One Lonely Outpost</a></i> and the action adventure game <i><a href="https://store.steampowered.com/app/3284770/Steampunk_Shinobi/">Steampunk Shinobi</a></i>.</p>
        <p>This site is still a work in progress. If you want, you can check out my <a href="https://fr4ct1ons.github.io/">old portfolio</a> or <a href="https://www.artstation.com/fr4ct1ons">ArtStation</a>.</p>
        <div className={styles.grid + " mt-16"}>
          {categories.map((e) => {
            return <GalleryLink videoSrc={e.videoPath} imageSrc={e.imagePath} title={e.key} href={e.href}/>
          })}
        
        </div>

      </main>
    </div>
  )
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
