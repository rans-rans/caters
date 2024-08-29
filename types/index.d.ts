import { StaticImageData } from "next/image";
import React from "react";

// for the cover page
interface coverprops {
    children: React.ReactNode
    className?:string,
}

interface avatarprops {
    imageUrl: string,
    label: string,
    imageStyles: string
}

interface itemwithimageprops{
    className?:string,
    message:string,
    imageUrl:string | StaticImageData,
    title?: string,
    cta?:boolean,
    ctaName?:string,
    messageClass?:string,
    imgClass?:string,
    titleClass?:string,
    ctaClass?:string,
    imgContainerClass?:string,
    textClass?:string
}



interface flatlistitemlist {
    id: number,
    label: string,
    description:string 
}

interface flatlist{
    type?: string,
    items: flatlistitemlist[],
    className?:string,
}

interface headerprops{
    className?:string,
    message:string
}

interface filternavprops{
    items: flatlistitemlist[],
    className?:string,
}


interface packagecardprops{
    label:string,
    imageUrl:string | StaticImageData,
    title: string,
    message:string,
    className?:string,
    titleClass?:string,
    imageClass?:string,
    messageClass?:string,
    cardClass?:string,
    cardContClass?:string,

}