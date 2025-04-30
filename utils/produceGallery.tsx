import React, { ReactNode, useEffect, useState } from "react";
import { MobileConditionalString } from "./mobileClass";
import VideoPopup from "@/app/components/videoPopup";
import styles from "./produceGallery.module.css"

export function ProduceGalleryPage(props: {entries: CategoryEntry[]} )
{
    useEffect(() => {

    }, [props.entries])

    let components: ReactNode;
    
    if(props.entries.length <= 0)
    {
        
        return(
            <div>
                <div className={ styles.loader }>

                </div>
                <p style={{textAlign: "center", marginTop: "2rem"}}>Loading...</p>
            </div>
        )
    }

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

export function ProduceGalleryItem(props: {entry: CategoryEntry})
{
    const [popupOpen, setPopupOpen] = useState(false)
    if(!props.entry.imgPath && !props.entry.webmPath)
    {
        return undefined;
    }
    let href = props.entry.path
    let onClick = () => {}
    if(!props.entry.path)
    {
        href = props.entry.imgPath? props.entry.imgPath : props.entry.webmPath
        if(props.entry.webmPath)
        {
            href = undefined;
            onClick = () => {
                console.log("Popup should be open)")
                setPopupOpen(true);
            }
        }
        else
        {
            href = props.entry.imgPath;
        }
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
        <>
        <a style={{marginBottom: "2rem", cursor: "pointer"}} onClick={onClick} href={href}>
            <video className={MobileConditionalString("mb-4", "mb-8")} loop muted autoPlay>
                <source src={props.entry.webmPath} type="video/webm" />
            </ video>
            
        </a>
        {props.entry.webmPath? 
        <VideoPopup videoPath={props.entry.webmPath} isPopupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        :
        ""
        }
        </>
    )
}