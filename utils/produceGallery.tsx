import React, { ReactNode, useEffect, useState } from "react";
import { MobileConditionalString } from "./mobileClass";
import VideoPopup from "@/app/components/videoPopup";
import styles from "./produceGallery.module.css"

export function ProduceGalleryPage(props: {entries: ContentfulGalleryItem[]} )
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
        component = <ProduceGalleryItem entry={props.entries[i] } alignRight={ci==0}  />

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
        <div style={{width: "46%", textAlign: "left"}}>
            {c1}
        </div>
        <div style={{width: "46%"}}>
            {c2}
        </div>
    </div>
    )
    
}

export function ProduceGalleryItem(props: {entry: ContentfulGalleryItem, alignRight?: boolean})
{
    const [popupOpen, setPopupOpen] = useState(false)

    let fields = props.entry.fields
    if(!fields.file && !fields.file)
    {
        return undefined;
    }
    let href = fields.description
    let onClick = () => {}
    if(!fields.description)
    {
        href = fields.file.url
        if(fields.file.contentType.includes("video"))
        {
            href = undefined;
            onClick = () => {
                console.log("(Popup should be open)")
                setPopupOpen(true);
            }
        }
        else
        {
            href = fields.file.url;
        }
    }

    if(!fields.file.contentType.includes("video"))
    {
        return (
            <a href={href}>
                <img alt={href} src={fields.file.url} />
            </a>
        )
    }
    
    return(
        <>
        <a style={{marginBottom: "2rem", cursor: "pointer", display: "flex", justifyContent: props.alignRight? "right" : "left"}} onClick={onClick} href={href}>
            <video className={MobileConditionalString("mb-4", "mb-8")} loop muted autoPlay>
                <source src={fields.file.url} type="video/webm" />
            </ video>
        </a>
        {fields.file.url? 
        <VideoPopup videoPath={fields.file.url} isPopupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        :
        ""
        }
        </>
    )
}