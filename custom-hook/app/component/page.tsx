import { daysToWeeks, formatDistance, isAfter } from "date-fns"


   export const days2Week=(value:number)=>{
        return(daysToWeeks(value))
     }

     export const formatDistanceDate =(date1:Date|number ,date2:Date|number)=>{
              return  (formatDistance(date1,date2))
             }
             export const isAfterdate=(value:Date|number,compvalue:Date|number)=>{
               return(isAfter(value,compvalue))
             }

// 'use client'
// import { daysToWeeks, formatDistance, isAfter } from "date-fns";
// import { useState } from "react"

// export default function Component(){
//     const [isInput,setIsInput] = useState<string | number |Date | boolean>("")
//     // const [isFormat,setIsFormat] = useState()

//     const values = new Date();
//     console.log(values,"value")
 
//      function days2Week(value:number){
//         setIsInput(daysToWeeks(value))
//      }
     
    //  function isAfterdate(value:Date|number,compvalue:Date|number){
    //     setIsInput(isAfter(value,compvalue))
    //  }

//     

// }