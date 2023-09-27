"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const searchParams = useSearchParams();

  const currentParams = searchParams.get("tab");
  const [params, setParams] = useState(currentParams);

 console.log(currentParams,"curr")
  const imgArray = [
    { id: "chapter1", img: "/images/images(1).jpg", alt: "school" },
    { id: "chapter2", img: "/images/download.png", alt: "download" },
    { id: "chapter3", img: "/images/rose.jpg", alt: "rose" },
    { id: "chapter4", img: "/images/tiger.jpg", alt: "tiger" },
  ];
  // console.log(imgArray, "array");
  useEffect(() => {
    setParams(currentParams)
  }, [params]);

  console.log(params,"params")
  const filteredImages = imgArray.filter((data) => data.id ===currentParams);
  console.log(filteredImages,"images")
  return (
    <>
      <p>videos</p>
      <h1>Lesson {params}</h1>
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
