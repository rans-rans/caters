import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export  function SearchPage() {
  return (
        <div className="w-full space-y-2 px-4 py-2  text-4xl">
        <Input  className="max-w-lg  bg-white py-2" type="email" placeholder="Email" />
        <Button  className="px-8 py-4 duration-300 ease-in hover:-translate-y-0.5" type="submit">Search</Button>
        </div>
  ) 
}

export default SearchPage 
