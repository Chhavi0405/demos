'use client'
import { useState } from 'react'

export default function Home() {
  const arrayTime = [
    {
        "id": 1822,
        "weekday": "Monday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.781Z",
        "updated_at": "2023-03-10T11:45:48.781Z"
    },
    {
        "id": 1823,
        "weekday": "Tuesday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.797Z",
        "updated_at": "2023-03-10T11:45:48.797Z"
    },
    {
        "id": 1824,
        "weekday": "Wednesday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.811Z",
        "updated_at": "2023-03-10T11:45:48.811Z"
    },
    {
        "id": 1825,
        "weekday": "Thursday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.825Z",
        "updated_at": "2023-03-10T11:45:48.825Z"
    },
    {
        "id": 1826,
        "weekday": "Friday",
        "opening_time": "02:30",
        "closing_time": "11:30",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.840Z",
        "updated_at": "2023-03-10T11:45:48.840Z"
    },
    {
        "id": 1827,
        "weekday": "Saturday",
        "opening_time": "02:30",
        "closing_time": "19:30",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.854Z",
        "updated_at": "2023-03-10T11:45:48.854Z"
    },
    {
        "id": 1828,
        "weekday": "Sunday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.868Z",
        "updated_at": "2023-03-10T11:45:48.868Z"
    }
]

// const [arr,setArr] = useState<any>()

arrayTime.map((data:any)=>{console.log(data)})

const handleChange=()=>{

}
  return (
    <>
    <h3 style={{textAlign:"center", textDecorationLine:"underline"}}>Multiple checkboxes</h3>
   
   <br/>
    <div style={{textAlign:"center"}}>

    {arrayTime.map((data:any)=>{
      return(
        <ul key={data.id}>
       <li>
        <input
        type='checkbox'
        value={data.weekday}
        name={data.weekday}
        checked ={data.status}
        onChange={handleChange}
        />
        <label htmlFor={`styled-checkbox ${data._id}`}>
                              {data.weekday} &nbsp;
                              <span>
                                {data.opening_time} {data.closing_time}
                              </span>
                            </label>
       </li>
        </ul>
      )
    })}
    </div> 
    </>
  )
}
