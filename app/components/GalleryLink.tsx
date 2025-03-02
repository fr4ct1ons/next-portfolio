import Image from "next/image";
import styles from "./GalleryLink.module.css"

interface GalleryLinkProps
{
    videoSrc?: string;
    imageSrc?: string;
    title?: string;
    href: string;
}

function GalleryLink(props: GalleryLinkProps)
{

    return(
        <div className={styles.galleryLink} >
                <a href={props.href}>
                {props.title? <div className={styles.title}>
                    <p className="text-3xl">{props.title}</p>
                </div> : null}
                {
                    props.imageSrc? 
                    <Image width={720} height={720} alt={props.imageSrc} src={props.imageSrc} loading="eager"/>
                    :
                <video loop muted autoPlay className={styles.video}>
                    <source src={props.videoSrc} type="video/webm" />
                </video>
                }
                
            </a>
        </div>
    )
}

export default GalleryLink;