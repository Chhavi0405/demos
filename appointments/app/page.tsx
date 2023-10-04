"use client";

import moment from "moment";
import { useEffect, useState } from "react";
export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);

  const ar = dateArray.map((arr: any) => arr);
  useEffect(() => {
    getDate();
  }, [isActive]);
  console.log(isActive, "isactive");

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
    console.log(e, "clicked");
    let today = moment().format("YYYY-MM-DD");
    console.log(today, "today");
    if (e >= today) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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

      <span>
        {dateArray?.map((dates: any) => (
          <li
          key={dates}
          style={{
            cursor: isActive && dates >= moment().format("YYYY-MM-DD")
              ? 'pointer'
              : 'not-allowed',
            color: dates >= moment().format("YYYY-MM-DD")
              ? 'black'
              : 'gray', 
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
      </span>
    </>
  );
}
