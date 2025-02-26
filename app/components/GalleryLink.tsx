import styles from "./GalleryLink.module.css"

interface GalleryLinkProps
{
    src: string;
    title?: string;
    href: string;
}

function GalleryLink(props: GalleryLinkProps)
{

    return(
        <div className={styles.galleryLink} >
                <a href={props.href}>
                {props.title? <div className={styles.title}>
                    <p>{props.title}</p>
                </div> : null}
                <video loop muted autoPlay className={styles.video}>
                    <source src={props.src} type="video/webm" />
                </video>
            </a>
        </div>
    )
}

export default GalleryLink;