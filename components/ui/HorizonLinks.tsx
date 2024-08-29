"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";
import helpers from "@/constants/helpers";
import { usePathname } from "next/navigation";

interface itemtype {
  imageUrl: string;
  label: string;
  reff: string;
}

const HorizonLinks = () => {
  const pathname = usePathname();
  //TODO this is the previous link bar
  // return (
  //   <>
  //     <div className=' gap-4  hidden md:flex'>
  //       {helpers.navlinks.map((item:any) =>{return (
  //         <Link href={item.reff} key={item.label}>
  //           <div className='flex flex-row-reverse items-center gap-2 py-2  cursor-pointer'>
  //           <Image
  //             src={item.imageUrl}
  //             alt={item.label}
  //             height={18}
  //             width={18}
  //           />
  //           <p className={`${pathname === item.reff ? " font-extrabold opacity-80 capitalize ":"opacity-50"} text-white`}>{item.label}</p>
  //           </div>
  //         </Link>
  //     )})}
  //     </div>
  //   </>
  // )
  return (
    <>
      <div className=" gap-4  hidden md:flex">
        {helpers.navlinks.map((item: any) => {
          return (
            <Link href={item.reff} key={item.label}>
              <div className="flex flex-row-reverse items-center gap-2 py-2  cursor-pointer">
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  height={18}
                  width={18}
                />
                <p
                  className={`${
                    pathname === item.reff
                      ? " font-extrabold capitalize text-secondarycolor"
                      : "opacity-50"
                  } text-black`}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HorizonLinks;
