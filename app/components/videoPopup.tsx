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
    

    if(!props.isPopupOpen)
    {
        return;
    }

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

    return (
        <div onKeyDown={(e) => e.key == "esc"?console.log("Hello!!!!") : "" } className={styles.videoPopup} onClick={() => {console.log("clossss"); props.setPopupOpen(false)}}>
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