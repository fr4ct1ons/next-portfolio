import React from 'react'
import SkillCard from './components/skillCard'
import style from "./page.module.css"
import EducationItem from './components/educationItem'
import WorkCard from './components/workCard'
import RelevantInfo from './components/relevantInfo'


const skills = [
    {
        key: "Unreal",
        src: "/skills/Unreal.png"
    },
    {
        key: "Unity",
        src: "/skills/Unity.png"
    },
    {
        key: "C++",
        src: "/skills/cpp.png"
    },
    {
        key: "C#",
        src: "/skills/cs.png"
    },
    {
        key: "Shaders",
        src: "/skills/ShaderAlt.png"
    },
    {
        key: "Blender",
        src: "/skills/Blender.png"
    },
    {
        key: "Krita",
        src: "/skills/Krita.png"
    },
    {
        key: "Substance Suite",
        src: "/skills/Substance.jpg"
    },
    {
        key: "Python",
        src: "/skills/Python.png"
    },
]

function About() {
  return (
    <main>
        <h1 className='mb-4'>About</h1>
        <h2 className='mb-16'>My previous experiences, skills and where to find me</h2>
        <p>I am Gabriel Lucena, a tech artist from Natal, RN, Brazil, where I also currently live. I have 5 years of work experience as tech artist.</p>
        <p>Currently, I work as a VR/XR Development lead at AKCIT {"(Advanced Knowledge Center for Immersive Technologies)"}, at the local college, but I've worked as Tech Artist on <i>COMBOTRONICA</i>, <i>One Lonely Outpost</i>, <i>Steampunk Shinobi</i> and as a VFX Artist on <i>Rise of the Third Power</i>.</p>
        <p>As a tech artist, my main specialties are visual effects, shaders, lighting, post processing and rendering, though I also work with 3D modelling/texturing, programming and setting up animations in-engine.</p>
        <p>When it comes to my education, I have a Bachelor's in I.T., which I studied from 2018 to 2022.</p>
        <p>I speak english and portuguese fluently, and I also have been taking french lessons and can speak basic french.</p>
        
        <h3>Tools & Skills</h3>

        <div className={style.skills}>
        {
            skills.map((e) => 
                {
                    return (<SkillCard key={e.key} name={e.key} imageSrc={e.src} />)
                }
            )
        }
        </div>

        <ul className={style.list}>
            <li>Visual Effects</li>
            <li>Shader programming</li>
            <li>Tool Development</li>
            <li>3D modelling</li>
            <li>Multiplayer basics</li>
            <li>Lighting</li>
            <li>Procedural mesh generation</li>
            <li>Texturing & UV Mapping</li>
            <li>UI Programming</li>
            <li>Basic 3D rigging</li>
            <li>Design patterns & SOLID</li>
            <li>Virtual Reality development</li>
        </ul>


        <h3>Games & Work experience</h3>

        <WorkCard imgHref="https://store.steampowered.com/app/3902340/COMBOTRONICA/" duration="Aug. 2025 - Mar. 2026" game='COMBOTRONICA' studio='Grid Cortex Games' imgSrc='/games/CMB.jpg'>
            <p>Worked as Tech Artist, working mainly w/ VFX, shaders and user interface</p> 
        </WorkCard>

        <WorkCard imgHref="https://akcit.ufg.br/" duration="Jun 2025 - Current" game='AKCIT' studio='Advanced Knowledge Center for Immersive Technologies' imgSrc='/other/logo_akcit.webp'>
            <p>Leading college undergraduate students in the development and R&D of projects in VR/XR. Website available only in portuguese</p> 
        </WorkCard>
        
        <WorkCard imgHref="https://store.steampowered.com/app/3284770/Steampunk_Shinobi/" duration="Nov. 2023 - Jul. 2024" game='Steampunk Shinobi' studio='Vagabond Games' imgSrc='/games/SPS.jpg'>
            <p>Worked as Tech Artist, working mainly w/ VFX, shaders, lighting etc. for attacks & skills, as well as environment</p>
        </WorkCard>

        <WorkCard imgHref="https://store.steampowered.com/app/1465550/One_Lonely_Outpost/" duration="Mar. 2022 - Oct. 2023" game='One Lonely Outpost' studio='Freedom Games' imgSrc='/games/OLO.jpg'>
            <p>Worked as Tech Artist, working mainly w/ VFX, shaders, lighting etc. for environment, items, weather, vegetation and others.</p>
        </WorkCard>

        <WorkCard imgHref="https://store.steampowered.com/app/698700/Rise_of_the_Third_Power/" duration="Apr. 2021 - Sep. 2021" game='Rise of the Third Power' studio='Stegosoft Games' imgSrc='/games/R3P.jpg'>
            <p>Worked as VFX Artist, creating visual effects used by enemies and some effects used in the environment.</p>
        </WorkCard>


        <h3>Education</h3>

        <EducationItem period='2018-2022' institution='Universidade Federal do Rio Grande do Norte' title='B.S., Information Technology' />
        {/*<EducationItem period='2024-Ongoing' institution='Universidade Federal do Rio Grande do Norte' title="Master's, Information Technology" />*/}


        <h3>Other relevant info</h3>
        <RelevantInfo title="SIGGRAPH Asia 2025 Poster" imgSrc="/other/SIGGRAPH2025Logo.png">
            <p>In 2025, I submitted a poster for SIGGRAPH Asia 2025 on Cel-Shading in Unreal Engine 5 and it was one of the selected works, so I had the privilege of showcasing it in Hong Kong for the duration of the event.</p>
            <p>Fore more info, please check out the GitHub repo. If that link doesn't work, you need to join the <a href='https://dev.epicgames.com/documentation/unreal-engine/downloading-source-code-in-unreal-engine'>Epic Games organization on GitHub.</a></p>
            <p>Lins: <a href="https://github.com/fr4ct1ons/UnrealEngineCelShader">GitHub repo</a> - <a href="https://youtu.be/l75HxZnkJ_0">YouTube Demo</a> - <a href="https://dl.acm.org/doi/10.1145/3757374.3771456">Poster on ACM DL</a></p>
        </RelevantInfo>

        <RelevantInfo title="Cambridge English C1 Advanced">
            <p>Scored 198 in my Cambridge English Assessment <a href="https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/">C1 Advanced</a> test. The result was issued on June 2025.</p>
        </RelevantInfo>
    </main>
  )
}

export default About