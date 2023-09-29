"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SideBar() {
  const dataArray = [
    { id: "chapter1", title: "Topic 1" },
    { id: "chapter2", title: "Topic 2" },
    { id: "chapter3", title: "Topic 3" },
    { id: "chapter4", title: "Topic 4" },
  ];
  // console.log(dataArray,"data")

  const router = useRouter();
 

  const handleClick = (_t: any) => {
    router.push(`/?tab=${_t}`);
  };

  return (
    <>
    <ul>
      {dataArray.map((item: any) => {
        return (
          <li
            key={item.id}
           
            onClick={(_t: any) => {
              handleClick(`${item.id}`);
            }}
            
          >
            
            <p style={{fontSize:"20px"}}>{item.title}</p>
          </li>
        );
      })}
      </ul>
    </>
  );
}



