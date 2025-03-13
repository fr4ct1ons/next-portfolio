import Image from "next/image";
import styles from "./GalleryLink.module.css"
import { MobileConditionalString } from "@/utils/mobileClass";
import { isMobile } from "react-device-detect";

interface GalleryLinkProps
{
    videoSrc?: string;
    imageSrc?: string;
    title?: string;
    href: string;
}

function GalleryLink(props: GalleryLinkProps)
{

    if(isMobile)
    {
        return(
            <div className={styles.galleryLink}>
                <a href={props.href}>
                    {props.title? 
                    <div className={styles.titleMobile}>
                        <p className={"text-xl"}>{props.title}</p>
                    </div> : null}
                    {
                        props.imageSrc? 
                        <Image width={720} height={720} alt={props.imageSrc} src={props.imageSrc} loading="eager"/>
                        :
                    <video loop muted autoPlay className={styles.video}>
                        <source src={props.videoSrc} />
                    </video>
                    }
                    
                </a>
            </div>
        )
    }

    return(
        <div className={styles.galleryLink} >
                <a href={props.href}>
                {props.title? <div className={styles.title}>
                    <p className={MobileConditionalString("text-xl", "text-3xl")}>{props.title}</p>
                </div> : null}
                {
                    props.imageSrc? 
                    <Image width={720} height={720} alt={props.imageSrc} src={props.imageSrc} loading="eager"/>
                    :
                <video loop muted autoPlay className={styles.video}>
                    <source src={props.videoSrc} />
                </video>
                }
                
            </a>
        </div>
    )
}

export default GalleryLink;