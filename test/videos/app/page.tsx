"use client";
import { useEffect, useState } from "react";
import { useSearchParams ,useRouter} from "next/navigation";
import Image from "next/image";


export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = searchParams.get("tab");
  const [params, setParams] = useState(currentParams);


  const imgArray = [
    { id: "chapter1", img: "/images/images(1).jpg", alt: "school" },
    { id: "chapter2", img: "/images/download.png", alt: "download" },
    { id: "chapter3", img: "/images/rose.jpg", alt: "rose" },
    { id: "chapter4", img: "/images/tiger.jpg", alt: "tiger" },
  ];
  // console.log(imgArray, "array");
  const autoRun =()=>{
    const currentIndex = imgArray.findIndex((data:any)=>data.id === params)
    // console.log(currentIndex,"index")
    const nextIndex = (currentIndex + 1) % imgArray.length;
    // console.log(nextIndex,"nextindex")
    const imgIndex = imgArray[nextIndex].id
    // console.log(imgIndex,"imgindex")
    setParams(imgIndex);

    router.push(`/?tab=${imgIndex}`)
  }


  useEffect(() => {
    const timer = setInterval(autoRun, 5000);

    return () => {
      clearInterval(timer); 
    };
  }, [params,router]);

 

  const filteredImages = imgArray.filter((data) => data.id ===currentParams);
  console.log(filteredImages,"images")

  
  return (
    <>
      <p>videos</p>
      <h1>Lesson {currentParams}</h1>
      <hr />
      

      {filteredImages.map((data) => {
        return ( 
          <Image 
            key={data.id}
            src={data.img}
            alt={data.alt}
            width={200}
            height={250}
          />
          
        );
      })}

      <hr />
    </>
  );
}
