"use client";

import moment from "moment";
import { useEffect, useState } from "react";
export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);
  const [isDate,setIsDate] = useState<any>()
  const [isTime,setIsTime] = useState<any>([])
  const ar = dateArray.map((arr: any) => arr);
  useEffect(() => {
    getDate();
    getTime();
  }, [isActive]);

  const startOfMonth: any = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: any = moment().endOf("month").format("YYYY-MM-DD ");

  const getDate = () => {
    var dateArray = [];
    var currentDate = moment(startOfMonth);
    var stopDate = moment(endOfMonth);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    // return dateArray;
    setDateArray(dateArray.map((x) => x));
  };

  const handleClick = (e: any) => {
    // console.log(e, "clicked");
    setIsDate(e)
  };

const getTime =()=>{
  const start = moment().startOf('day');
  const times = 24 * 2; 
  const toPrint= moment(startOfMonth)
  for (let i = 0; i < times; i++) {
    isTime.push(moment(toPrint)
      .add(30 * i, 'minutes')
      .format('hh:mm A'))
  }
  setIsTime(isTime.map((y: any) => y));
}
 
  return (
    <>
      <div
        style={{
          textAlign: "center",
          textDecorationLine: "underline",
          color: "darkmagenta",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        Date & Time
      </div>
      <p>{isDate} </p>
      <span>
        {dateArray?.map((dates: any) => (
          <li
          key={dates}
          // style={{
          //   cursor: isActive && dates >= moment().format("YYYY-MM-DD")
          //     ? 'pointer'
          //     : 'not-allowed',
          //   color: dates >= moment().format("YYYY-MM-DD")
          //     ? 'black'
          //     : 'gray', 
          // }}
          // onClick={() => {
          //   if (isActive && dates >= moment().format("YYYY-MM-DD") ) {
          //     handleClick(dates);
          //   }
          // }}
        >
           <p>{moment(dates).format("DD MMMM YYYY")}</p>

         <ul>
         {isTime?.map((times:any)=>(
            <li key={times}>
            {times}
            </li>
          ))}
         </ul>
         
        </li>
        ))}
                 
      </span>

      
    </>
  );
}
