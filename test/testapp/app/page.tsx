'use client'
import {useState} from 'react'
export default function Home() {
  const [data,setData] = useState<any>([])
  const array = [
    {id:1 ,Lessonname:"Basics", Lesson1:[{topicId:1.1,name:"home"},{topicId:1.2,name:"homePage"}]}, 
    {id:2  ,Lessonname:"About", Lesson2:[{topicId:2.1,name:"about"},{topicId:2.2,name:"aboutpage"}]},
    {id:3  ,Lessonname:"Topic" , Lesson3:[{topicId:3.1,name:"Topic34"},{topicId:3.2,name:"Topic37"}]},
    {id:4  ,Lessonname:"HarryPotter", Lesson4:[{topicId:4.1,name:"harrypotter1"},{topicId:4.2,name:"harrypotter2"}]},
    {id:5  ,Lessonname:"Avengers", Lesson5:[{topicId:5.1,name:"avengers end war"},{topicId:5.2,name:"ultron"}]},
    {id:6  ,Lessonname:"DoctorStrange", Lesson6:[{topicId:6.1,name:"spiderman"},{topicId:6.2,name:"antman"}]}
 ]
console.log(array,"array")


let arr =array.map((data)=>
{return({data}
// data.address.map((item)=>{
//    return {...item}
// } )
)
})

console.log(arr)

  return (
    <>
<p>Hlo 1</p>
{array.map((data:any)=><button key={data.id}> {data.Lessonname}&nbsp; </button>)}

</>
  )
}
