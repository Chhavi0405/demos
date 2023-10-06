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

  const getDate = () => {
    var dateArray = [];
    var currentDate = moment(startOfMonth);
    var stopDate = moment(endOfMonth);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    setDateArray(dateArray.map((x) => x));
  };

  const handleClick = (e: any) => {
    setIsDate(e);
    setSelectedDate(e);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "darkred",
          fontSize: "20px",
          fontWeight: "bolder",
          textDecorationLine: "underline",
        }}
      >
        Calendar
      </div>
      <p style={{textAlign:"center", fontWeight: "bolder",}}>{moment().format("MMMM YYYY")}</p>
      <p style={{textAlign:"left", fontWeight: "bolder",}}>{isDate} </p>
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
