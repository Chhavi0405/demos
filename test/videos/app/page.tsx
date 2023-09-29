"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
  const len = imgArray[imgArray.length - 1];
  const ids = len.id;

  useEffect(() => {
    const autoRun = () => {
      const currentIndex = imgArray.findIndex(
        (data: any) => data.id === params
      );
      const nextIndex = (currentIndex + 1) % imgArray.length;
      const imgIndex = imgArray[nextIndex].id;
      setParams(imgIndex);

      router.push(`/?tab=${imgIndex}`);
    };
    const timer = setTimeout(autoRun, 5000);

    if (ids === params) {
      clearTimeout(timer);
    } else {
      setTimeout(autoRun, 5000);
      console.log("autorun");
    }
  }, [params, router]);
  console.log(params, "params");

  const filteredImages = imgArray.filter((data) => data.id === currentParams);
  console.log(filteredImages, "images");

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
