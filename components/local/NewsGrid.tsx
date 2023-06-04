import dynamic from "next/dynamic"
import { NewsArticle } from "@/models/NewsArticles"
import NewsEntry from "./NewsEntry"

const NewsGrid = ({data}:any) => {
    
  return (
    <div className="grid sm:p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {
            data.map((data:NewsArticle) =>{

             return   ( 
             <NewsEntry key={data.url} article={data}/>
             )
            })
        }
    </div>
  )
}

export default NewsGrid
