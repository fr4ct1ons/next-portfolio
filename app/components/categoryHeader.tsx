import Image from 'next/image';
import React from 'react'

interface CategoryHeaderProps
{
    title: string;
    children: React.ReactNode;
    thumbImage?: string;
    thumbVideo?: string;
}

function CategoryHeader(props: CategoryHeaderProps)
{
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.thumbVideo? 
                (
                    <video className='w-[60%] mx-auto my-8' loop muted autoPlay>
                        <source src={props.thumbVideo} type="video/webm"/>
                    </video>
                )
                :
                (
                    <Image width={1080} height={1080} alt={props.thumbImage} src={props.thumbImage} loading="eager"/>
                )
            }

            {props.children}
        </div>
    )
}

export default CategoryHeader;