"use-client";

import React from "react";
import Image from "next/image";
import { comprops } from "@/types";

const ImageWithText = ({ className, imageUrl, message }: comprops) => {
  return (
    <div className="md:flex items-start justify-center gap-8">
      <p>{message ?? ""}</p>
      <div>
        <Image
          src={imageUrl}
          alt=""
          height={30}
          width={30}
          className={className}
        />
      </div>
    </div>
  );
};

export default ImageWithText;
