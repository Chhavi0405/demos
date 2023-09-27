'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";
export default function SideBar(){
    const router = useRouter();
    const [tab,setTab] = useState('')
     const handleClick=(_t:any)=>{
        setTab(_t)
     router.push(`/?tab=${_t}`)


     }

     
    return(
        <>
      
        <ul>
        <li onClick={(_t:any)=>{handleClick("chapter1")}}>Chapter 1 </li>
        <li onClick={(_t:any)=>{handleClick("chapter2")}}>Chapter 2</li>
        <li onClick={(_t:any)=>{handleClick("chapter3")}}>Chapter 3</li>
        <li onClick={(_t:any)=>{handleClick("chapter4")}}>Chapter 4</li>
        </ul>
     
        </>
    )
}