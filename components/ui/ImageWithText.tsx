"use-client";

import React from "react";
import Image from "next/image";
import {itemwithimageprops } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./button";

const ImageWithText = ({ className, imageUrl, message,ctaName,cta,title,ctaClass,imgClass,imgContainerClass,messageClass,titleClass,textClass }: itemwithimageprops) => {
  return (
    <article className={cn("",className)}>
      <div className={cn('',textClass)}>
        <h2 className={cn("",titleClass)}>{title}</h2>
        <p className={cn('',messageClass)}>
        {message }
        </p>
        {
        cta && <div className={cn('',ctaClass)}>
          <Link className={` ${buttonVariants({variant:"default"})}`} href="/sign-in">
            {ctaName}
          </Link>
        </div>
        }
      </div>
      <div className={cn('',imgContainerClass)}>
        <Image
          src={imageUrl}
          alt=""
          height={600}
          width={800}
          className={cn('',imgClass)}
        />
      </div>
    </article>
  );
};

export default ImageWithText;
