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

interface comprops{
    className?:string,
    message:string,
    imageUrl:string
}
