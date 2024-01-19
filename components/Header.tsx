"use client";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
interface Headerprops{
    children:React.ReactNode;
    className?:string;
}

const Header:React.FC<Headerprops>=({
    children,
    className
})=>{
    const router =useRouter();
    const handleLogout=()=>{
        //handle logout in future
    }

    return(
        <div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6',className)}>
           <div className="w-full mb-4 flex items-center justify-between " >
            <div className="hidden md:flex gap-x-2 items-center"></div>
           </div>
        </div>
    );
}
export default Header;