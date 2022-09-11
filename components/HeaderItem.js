
const HeaderItem=({Icon,title})=>{
    return(
        <div className="text-white flex flex-col group  items-center w-12 sm:w-2">
           <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100 text-[14px]">{title}</p>
           </div>
    );
}

export default HeaderItem;
