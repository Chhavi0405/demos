"use client";
import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [isActive, setIsActive] = useState<any>(true);
  const [isDate, setIsDate] = useState<any>();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [startedTime, setStartedTime] = useState<any>();
  const [endTime, setEndTime] = useState<any>();
  useEffect(() => {
    getDate();
  }, [isActive]);

  const startOfMonth: any = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: any = moment().endOf("month").format("YYYY-MM-DD ");

  const startTimed = moment("8:00 ", "HH:mm ");
  const startTimes = moment("21:00 ", "HH:mm ");
  const timeSlotInterval = 30;
  const endTimed = moment("8:30 ", "HH:mm ");
  const endTimes = moment("21:30 ", "HH:mm ");
  const currentTime = moment().format("HH:mm ");

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
    setSelectedDate(e);
    setStartedTime(null);
    setEndTime(null);
  };

  const getTime = () => {
    const timeArray = [];

    let currentTimeSlots = moment(startTimed);

    while (currentTimeSlots <= startTimes) {
      const timeSlot = currentTimeSlots.format("HH:mm ");
      timeArray.push(timeSlot);
      currentTimeSlots = currentTimeSlots.add(timeSlotInterval, "minutes");
    }
    return timeArray;
  };

  const getTime2 = () => {
    const timeArrays2 = [];

    let currentTimeSlot = moment(endTimed);

    while (currentTimeSlot <= endTimes) {
      const timeSlots = currentTimeSlot.format("HH:mm ");
      timeArrays2.push(timeSlots);
      currentTimeSlot = currentTimeSlot.add(timeSlotInterval, "minutes");
    }

    return timeArrays2;
  };

  const timeSlots = getTime();

  const timeInterval = getTime2();


  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const handleStartTime = (timeSlot: any) => {
    if (
      !(
        selectedDate === moment().format("YYYY-MM-DD") &&
        moment(timeSlot, "h:mm A") <= moment(currentTime, "h:mm A")
      )
    ) {
      setStartedTime(timeSlot);
    }
  };

  const handleEndTime = (timeSloted: any) => {
    if (
      !(
        selectedDate === moment().format("YYYY-MM-DD") &&
        moment(timeSloted, "h:mm A") <= moment(currentTime, "h:mm A")
      )
    ) {
      setEndTime(timeSloted);
    }
  };
  const handleTimeChange = (e: any) => {
    const selectedStartTime = e.target.value;
    if (endTime && selectedStartTime >= endTime) {
      alert("select a proper time");
    }
    setStartedTime(selectedStartTime);
    setEndTime(null);
  };
  const handleTimeChanges = (e: any) => {
    const selectedEndTime = e.target.value;
    if (selectedEndTime <= startedTime) {
      // alert("End time must be after start time");
      return null;
    }
    setEndTime(selectedEndTime);
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

      <div style={{ border: "2px solid blue", textAlign: "center" }}>
        <label>choose Date </label>
        <br />
        <select
          value={selectedDate || ""}
          onChange={handleDateChange}
          style={{ border: "2px solid black", textAlign: "center" }}
        >
          <option value="">Select a date</option>
          {dateArray?.map((dates: any) => (
            <option
              key={dates}
              style={{
                color:
                  dates >= moment().format("YYYY-MM-DD") ? "black" : "gray",
              }}
              value={dates}
              onClick={() => {
                if (dates >= moment().format("YYYY-MM-DD")) {
                  handleClick(dates);
                }
              }}
              disabled={dates < moment().format("YYYY-MM-DD")}
            >
              <>{moment(dates).format("DD MMMM YYYY")}</>
            </option>
          ))}
        </select>
        {/* <> selected Date : {selectedDate}</> */}
      </div>
      <br />
      <div
        style={{
          border: "2px solid blue",
          textAlign: "center",
          display: "block",
          margin: "0 auto",
        }}
      >
        {selectedDate && (
          <>
            <h2>Select a start time:</h2>
            <select
              value={startedTime || ""}
              onChange={handleTimeChange}
              style={{ border: "2px solid black", textAlign: "center" }}
            >
              <option value="">Select a start slot </option>
              {timeSlots.map((timeSlot: any, index: any) => (
                <option
                  key={index}
                  value={timeSlot}
                  onClick={(timeSlot: any) => {
                    handleStartTime(timeSlot);
                  }}
                  disabled={
                    selectedDate === moment().format("YYYY-MM-DD") &&
                    moment(timeSlot, "h:mm A") <= moment(currentTime, "h:mm A")
                  }
                >
                  {timeSlot}
                </option>
              ))}
            </select>
            {/* <p style={{color:"violet"}}>
              {startedTime
                ? `Selected Time: ${startedTime}`
                : "Please select a time."}
            </p> */}
          </>
        )}
      </div>
      <br />
      <div
        style={{
          border: "2px solid blue",
          textAlign: "center",
          display: "block",
          margin: "0 auto",
        }}
      >
        {selectedDate && startedTime && (
          <>
            <h2>Select a end time:</h2>
            <select
              value={endTime || ""}
              onChange={handleTimeChanges}
              style={{ border: "2px solid red", textAlign: "center" }}
            >
              <option value="">Select end slot </option>
              {timeInterval.map((timeSloted: any, index: any) => (
                <option
                  key={index}
                  value={timeSloted}
                  onClick={(timeSloted: any) => {
                    handleEndTime(timeSloted);
                  }}
                  disabled={
                    selectedDate === moment().format("YYYY-MM-DD") &&
                    moment(timeSloted, "h:mm A") <=
                      moment(startedTime, "h:mm A")
                  }
                >
                  {timeSloted}
                </option>
              ))}
            </select>
            {/* <p style={{color:"violet"}}>
              {endTime
                ? `Selected Time: ${endTime}`
                : "Please select a end time."}
            </p> */}
          </>
        )}
      </div>
    </>
  );
}
