'use client'
import { useEffect, useState } from "react"
import { days2Week,formatDistanceDate } from "./component/page"


export default function Home() {

  const newday= new Date(2015, 0, 1)
  console.log(newday,"newday")
  const data = days2Week(14)
  console.log(data,"data")
 
  const dateDistance = formatDistanceDate(new Date(2015, 0, 1), new Date(2016, 0, 1))
  console.log(dateDistance,"dateDistance")
  return (
   <>
   
   <h1>days2weeks </h1>
 
   </>
  )
}
