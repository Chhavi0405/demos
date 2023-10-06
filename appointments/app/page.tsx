"use client";

// import moment from "moment";
import moment from 'moment-timezone';
import { useEffect, useState } from "react";
export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);
  const [isDate, setIsDate] = useState<any>();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [selectedTime, setSelectedTime] = useState<any>();

  useEffect(() => {
    getDate();
  }, [isActive]);

  const startOfMonth: any = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: any = moment().endOf("month").format("YYYY-MM-DD ");

  const startTime = moment('8:00 AM', 'h:mm A');
  const endTime = moment('9:00 PM', 'h:mm A');
  const timeSlotInterval = 30;

  const currentTime = moment().format('hh:mm A');
const timezone = moment.tz.names()
console.log(timezone,"timezone")

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

  const getTime = () => {
    const timeArray = [];

    let currentTimeSlot = moment(startTime);

    while (currentTimeSlot <= endTime) {
      const timeSlot = currentTimeSlot.format("hh:mm A");
      timeArray.push(timeSlot);
      currentTimeSlot = currentTimeSlot.add(timeSlotInterval, "minutes");
    }

    return timeArray;
  };

  const timeSlots = getTime();

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
      {selectedDate && (
        <div>
          <h2>Select a time slot:</h2>
          <ul>
            {timeSlots.map((timeSlot: string) => (
              <li
                key={timeSlot}
                style={{
                  cursor:
                    selectedDate === moment().format("YYYY-MM-DD") &&
                    moment(timeSlot, 'h:mm A') <= moment(currentTime, 'h:mm A')
                      ? 'not-allowed'
                      : 'pointer',
                  color:
                    selectedDate === moment().format("YYYY-MM-DD") &&
                    moment(timeSlot, 'h:mm A') <= moment(currentTime, 'h:mm A')
                      ? 'gray'
                      : 'black',
                }}
                onClick={() => {
                  if (
                    !(
                      selectedDate === moment().format("YYYY-MM-DD") &&
                      moment(timeSlot, 'h:mm A') <= moment(currentTime, 'h:mm A')
                    )
                  ) {
                    setSelectedTime(timeSlot);
                  }
                }}
              >
                {timeSlot}
              </li>
            ))}
          </ul>
          <p>
            {selectedTime
              ? `Selected Time: ${selectedTime}`
              : "Please select a time."}
          </p>
        </div>
      )}
    </>
  );
}
