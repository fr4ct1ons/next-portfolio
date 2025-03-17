import React from 'react'
import SkillCard from './components/skillCard'
import style from "./page.module.css"
import EducationItem from './components/educationItem'
import WorkCard from './components/workCard'


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
        <p>I am Gabriel Lucena, a tech artist from Natal, RN, Brazil, where I also currently live. I have 4 years of relevant work experience as tech artist. In social media, I use the username "fr4ct1ons".</p>
        <p>Currently, I work as a full stack web developer at Instituto Metrópole Digital, at the local college, but I've worked as Tech Artist on <i>One Lonely Outpost</i>, <i>Steampunk Shinobi</i> and as a VFX Artist on <i>Rise of the Third Power</i>.</p>
        <p>As a tech artist, my main specialties are visual effects, shaders, lighting, post processing and rendering, though I also work with 3D modelling/texturing, programming and setting up animations in-engine.</p>
        <p>Additionally, I'm pursuing a Master's in Information Technology, in which I'm researching the implementation of a cel shader in Unreal Engine 5. I also have a Bachelor's in I.T., which I studied from 2018 to 2022.</p>
        <p>I speak english and portuguese fluently, and I also have been taking french lessons and can speak basic french.</p>
        
        <h3>Tools & Skills</h3>

        <div className={style.skills}>
        {
            skills.map((e) => 
                {
                    return (<SkillCard name={e.key} imageSrc={e.src} />)
                }
            )
        }
        </div>

        <ul className={style.list}>
            <li>Visual Effects</li>
            <li>Tool Development</li>
            <li>3D modelling</li>
            <li>Unity Multiplayer w/ Mirror</li>
            <li>Lighting</li>
            <li>Procedural mesh generation</li>
            <li>Texturing & UV Mapping</li>
            <li>UI Programming</li>
            <li>Basic 3D animation & rigging</li>
            <li>Design patterns & SOLID</li>
        </ul>


        <h3>Work experience</h3>

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
        <EducationItem period='2024-Ongoing' institution='Universidade Federal do Rio Grande do Norte' title="Master's, Information Technology" />
        
    </main>
  )
}

export default About