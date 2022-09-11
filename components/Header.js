import Image from "next/image"
import {
    HomeIcon,
    LightningBoltIcon,
    UserIcon,
    SearchIcon,
    CollectionIcon,
    BadgeCheckIcon
} from "@heroicons/react/outline"

import HeaderItem from  "./HeaderItem"

const Header=()=>{
    return(
        <div className="bg-slate-900 flex items-center flex-col p-5 sm:flex-row sm:justify-between">
           <div className="flex flex-grow justify-evenly max-w-2xl">
               <HeaderItem title="Home" Icon={HomeIcon} />
               <HeaderItem title="User" Icon={UserIcon} />
               <HeaderItem title="Search" Icon={SearchIcon} />
               <HeaderItem title="Trending" Icon={LightningBoltIcon} />
               <HeaderItem title="Collections" Icon={CollectionIcon} />
               <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
              </div>
            <div className="flex justify-center items-start">
              <Image src="https://links.papareact.com/ua6"  width={350} height={200}/>
               </div>
          </div>
    );
}


export default Header;
