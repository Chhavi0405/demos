"use client";

import moment from "moment";
import { useEffect, useState } from "react";
export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);

  const ar = dateArray.map((arr: any) => console.log(arr, "first"));
  useEffect(() => {
    getDate();
    let today = moment().format("YYYY-MM-DD");
    console.log(today, "today");
    if (ar >= today) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    // setIsActive(true)
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
      console.log("less than today");
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
          // eslint-disable-next-line react/jsx-key
          <span
            key={dates}
            onClick={() => {
              handleClick(dates);
            }}
          >
            <h6>{moment(dates).format("DD MMMM YYYY")}</h6>
          </span>
        ))}
      </span>
    </>
  );
}
