"use client";

import axios from "axios";
import React, { useState } from "react";
import CategoryHeader from "../components/categoryHeader";



function LiquidSim()
{
    const [data, setData] = useState<CategoryEntry[]>([])

    let components: React.ReactNode = undefined

    if(data.length <= 0)
    {
        axios.get("https://raw.githubusercontent.com/fr4ct1ons/portfolio-contents/refs/heads/main/LiquidSim/LiquidSim.json")
        .then((e) => 
        {
            console.log(e.data)
            setData(e.data)
        })
    }
    else
    {
        if(data.length < 5)
        {
            components = data.map((e) => {
                if(!e.imgPath && !e.webmPath)
                {
                    return undefined;
                }
                let href = e.path
                if(!e.path)
                {
                    href = e.imgPath? e.imgPath : e.webmPath
                }

                if(e.imgPath)
                {
                    return (
                        <a href={href}>
                            <img alt={e.imgPath} src={e.imgPath} />
                        </a>
                    )
                }
                
                return(
                    <a href={href}>
                        <video loop muted autoPlay>
                            <source src={e.webmPath} type="video/webm" />
                        </ video>
                    </a>
                )
            })

            components = (
                <div className="grid grid-cols-2 gap-4">
                    {components}
                </div>
            )
        }
    }


    return (
        <main>
            <CategoryHeader thumbVideo="/thumbs/Liquid.webm" title="Bottled liquid simulation" >
                <p>Liquid in a bottle simulation I made in Unity. Works with basic liquids such as wine, but also more complex ones with a parallax effect.</p>
            </CategoryHeader>

            {components}
        </main>
    )
}

export default LiquidSim;