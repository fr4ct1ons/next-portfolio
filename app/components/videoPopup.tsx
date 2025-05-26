import React, { useEffect } from 'react'
import styles from "./videoPopup.module.css"
import Image from 'next/image';

interface VideoPopupProps
{
    videoPath: string;
    videoName?:string;
    isPopupOpen :boolean;
    setPopupOpen: (isOpen: boolean) => void;
}

function VideoPopup(props: VideoPopupProps) {
    

    
    useEffect(() => {
    function onkeyDown(e: KeyboardEvent)
    {
        if(e.key == "Escape")
            {
                props.setPopupOpen(false)
            }
        }
        
        document.addEventListener("keydown", onkeyDown);
        
        return function cleanup()
        {
            document.removeEventListener("keydown", onkeyDown)
        }
    }, [props.isPopupOpen])
    
    if(!props.isPopupOpen)
    {
        return;
    }
    return (
        <div onKeyDown={(e) => e.key == "esc"?console.log("") : "" } className={styles.videoPopup} onClick={() => {console.log(""); props.setPopupOpen(false)}}>
            <div onClick={(e) => {e.stopPropagation()}} className={styles.foreground}>
                <div className={styles.toolbar}>
                    <p>{props.videoName}</p>
                    <button onClick={() => props.setPopupOpen(false)}>
                        <Image style={{height: "3rem", width: "3rem"}} width={64} height={64} alt="Close" src={"/close.png"} />
                    </button>
                </div>
                <video controls src={props.videoPath}></video>
            </div>
        </div>
    )
}

export default VideoPopup