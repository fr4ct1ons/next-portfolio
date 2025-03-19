import React, { ReactNode, useEffect } from "react";
import { MobileConditionalString } from "./mobileClass";

export function ProduceGalleryPage(props: {entries: CategoryEntry[]} )
{
    useEffect(() => {

    }, [props.entries])

    let components: ReactNode;
    if(props.entries.length < 5)
    {
        components = props.entries.map((e) => {
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
            <div className="mt-16 grid grid-cols-2 gap-4">
                {components}
            </div>
        )

        return components;
    }
    else
    {
        
        let 
        c1: ReactNode[] = [], 
        c2: ReactNode[] = []
        let ci = 0
        let component: ReactNode;
        for (let i = 0; i < props.entries.length; i++) {
            component = <ProduceGalleryItem entry={props.entries[i]}  />

            switch (ci) {
                case 0:
                    c1.push(component)
                    break;
                case 1:
                    c2.push(component)
                    break;
                default:
                    break;
            }

            ci = (ci+1) % 2;
            
        }

        return (
        <div style={{display: 'flex', justifyContent: "space-evenly", marginTop: "4rem"}}>
            <div style={{width: "46%"}}>
                {c1}
            </div>
            <div style={{width: "46%"}}>
                {c2}
            </div>
        </div>
        )
    }
}

export function ProduceGalleryItem(props: {entry: CategoryEntry})
{
    if(!props.entry.imgPath && !props.entry.webmPath)
    {
        return undefined;
    }
    let href = props.entry.path
    if(!props.entry.path)
    {
        href = props.entry.imgPath? props.entry.imgPath : props.entry.webmPath
    }

    if(props.entry.imgPath)
    {
        return (
            <a href={href}>
                <img alt={props.entry.imgPath} src={props.entry.imgPath} />
            </a>
        )
    }
    
    return(
        <a style={{marginBottom: "2rem"}} href={href}>
            <video className={MobileConditionalString("mb-4", "mb-8")} loop muted autoPlay>
                <source src={props.entry.webmPath} type="video/webm" />
            </ video>
        </a>
    )
}