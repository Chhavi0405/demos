"use client";

import moment from "moment";
import { useEffect, useState } from "react";
export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);
  const [isDate, setIsDate] = useState<any>();
  
  const [selectedDate, setSelectedDate] = useState<any>();

  useEffect(() => {
    getDate();
   
  }, [isActive]);

  const startOfMonth: any = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: any = moment().endOf("month").format("YYYY-MM-DD ");
 

  const startTime = moment('8:00 AM', 'h:mm A');
  const endTime = moment('9:00 PM', 'h:mm A');

  // console.log(startTime,"startTime",endTime)
  const currentTime = moment().format('hh:mm A')
  console.log(currentTime,"current")

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
    setIsDate(e);
    setSelectedDate(e);
    // setIsActive(false)
  };

  

  
  

  
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
      <div>
        {dateArray?.map((dates: any) => (
          <li
            key={dates}
            style={{
              cursor:
                isActive && dates >= moment().format("YYYY-MM-DD")
                  ? "pointer"
                  : "not-allowed",
              color: dates >= moment().format("YYYY-MM-DD") ? "black" : "gray",
            }}
            onClick={() => {
              if (isActive && dates >= moment().format("YYYY-MM-DD")) {
                handleClick(dates);
              }
            }}
          >
            <p>{moment(dates).format("DD MMMM YYYY")}</p>
          </li>
        ))}
      </div>

     
    </>
  );
}
