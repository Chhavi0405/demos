'use client'
import { useSearchParams} from "next/navigation"
import Image from "next/image";
export default function Home() {
  const searchParams = useSearchParams();
  const params = searchParams.get('tab')
  console.log(params,"tab")
const imgArray =[
  {id:'chapter1' ,img:'/images\images (1).jpg',alt:"school"},
  {id:'chapter2',img:'/images\download.png',alt:"download"},
  {id:'chapter3',img:'/images\rose.jpg',alt:"rose"},
  {id:'chapter4',img:'/images\tiger.jpg',alt:"tiger"}
]
console.log(imgArray,"array")
  return (
    <>
      <p>videos</p>
    <h1>Lesson {params}</h1>
    <hr/>
{imgArray.map((data:any)=>{ return (
  <Image key={data.id}
  src={data.img}
  alt={data.alt}
  width={400}
  height={250}
     
  />
)
  
  })}
  
<hr/>
{/* <Image
      src="/images\images (1).jpg"
      alt="Landscape picture"
      width={400}
      height={250}
    /> */}
  
    </>
  )
}
