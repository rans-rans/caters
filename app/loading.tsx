import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="flex items-center justify-center mx-auto p-16 duration-500 ease-out ">
      <Skeleton className="relative w-[300px] h-[300px] bg-white duration-500 ease-out animate-bounce  rounded-full ">
        <Skeleton className="absolute inset-0 p-10 rounded-full bg-black"/>
      </Skeleton>

    </div>
  )
}

export default Loading
