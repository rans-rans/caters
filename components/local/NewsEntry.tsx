import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";

import { NewsArticle } from "@/models/NewsArticles";
import Link from "next/link";
import dynamic from "next/dynamic";


interface NewsEntryProps {
  article  : NewsArticle,
}

  type CardProps = React.ComponentProps<typeof Card>
  



  export function NewsEntry({article}:NewsEntryProps) {

    const {title,url,urlToImage,content,description } = article;

  
    const validImage = (urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')) ? urlToImage :
    'fallback.png';
    
    const validDescription = description ? description: "click on the image to see the content";

    return (  
        <Card className='shadow-md h-auto'>
            <CardHeader className="">
              <div className=" object-contain">
                <Image
                src={'/'+ validImage}
                height={description? 60 : 100}
                width={60}
                className='w-full h-auto object-cover'
                  alt={"image"}/>
              </div>
              <CardTitle className="text-2xl">
                {title}
              </CardTitle>
            </CardHeader>
              <CardContent>
                <p className={description ? 'text-lg': 'pt-10 text-lg'}>
                  {validDescription}
                </p>
              </CardContent>
        </Card>
    )
  }
  
  export default NewsEntry
  