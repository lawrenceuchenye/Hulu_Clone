import request from "../utils/request"
import { useRouter } from "next/router"

const CatNavbar=()=>{
    const router=useRouter();
    return(
      <div className="relative">
        <div className="bg-slate-900 text-white flex px-10  sm:px-20 whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide relative">
        {Object.entries(request).map(([key,{title,url}])=>(
            <h1 key={key}  onClick={()=>router.push(`/?genre=${key}`)} className="last:pr-10 transition duration-300 teansform hover:scale-125 active:text-red-400">{title}</h1>
        ))} 
        </div>
         <div className="absolute right-0 top-0 bg-gradient-to-l from-slate-900 w-1/12 h-8"></div>
        </div>
    );
}


export default CatNavbar;
