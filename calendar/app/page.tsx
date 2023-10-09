"use client";

import moment from "moment-timezone";
import { useEffect, useState } from "react";
export default function Home() {
  useEffect(() => {
    getTimeZone();
  }, []);
  const [zoneArray, setZoneArray] = useState<any>([]);
  const [rawTime, setRawTime] = useState("00:00");
  const [displayResults, setDisplayResults] = useState<any>([]);
   const [selectedTimeZone, setSelectedTimeZone] = useState<any>();
 const [selectedTime, setSelectedTime] = useState<any>("");
  const getTimeZone = () => {
    let zoneArrayss = [];
    const timezone = moment.tz.names();
    zoneArrayss = timezone;
    setZoneArray(zoneArrayss);
  };
  // const timeZones = ["GMT", "Europe/Madrid", "Asia/Tokyo", "Asia/Kolkata"];

  const placeZone =()=>{
    const timed = moment(`${rawTime}`, "HH:mm A");

    const convert: any = timed._d;
    let displayDate;
    const results = [];
    for (let timeZone of zoneArray) {
      displayDate = Intl.DateTimeFormat("en-GB", {
        day:"2-digit",
        month:"short",
        year:"numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: timeZone,
      }).format(convert);
      results.push({ timeZone, displayDate });
      // console.log("%s @ %s", displayDate, timeZone);
    }
    setDisplayResults(results);
  }
  // const placeTime = placeZone();

  useEffect(() => {
    if (selectedTimeZone) {
      const currentTime = moment().tz(selectedTimeZone).format(" DD-MM-YYYY,HH:mm A");
      setSelectedTime(currentTime);
    } else {
      setSelectedTime("");
    }
  }, [selectedTimeZone]);
  useEffect(() => {
    placeZone();
  }, [rawTime, zoneArray]);

  const handleTimeZoneChange = (event: any) => {
    setSelectedTimeZone(event.target.value);
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
<hr/>
      <div style={{
           textAlign: "center",
           color:"lightsteelblue" ,
           fontSize: "15px",
           fontWeight: "bolder",
           display: "block", 
           margin: "30px", 
        }}>
        <label >
          enter time:</label>
        <input
          className="time-input"
          type="time"
          onChange={(ev) => setRawTime(ev.target.value)}
          value={rawTime}
        />
      </div>
      <p style={{
        textAlign: "center",
        color:"blue" ,
        fontSize: "15px",
        fontWeight: "bolder",
        display: "block", 
        margin: "30px",
        border:"2px dotted"

      }}>entered time:{rawTime}</p>
      <hr />
    <div style={{
           textAlign: "center",
           color:"black" ,
           fontSize: "15px",
           fontWeight: "bolder",
           display: "block", 
           margin: "30px",
           border:"2px solid" 
        }} >
        <label>Select a time zone:</label>
        <select
          value={selectedTimeZone || ""}
          onChange={handleTimeZoneChange}
        >
          <option value="">Select a time zone</option>
          {zoneArray.map((zone:any) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>
      <hr />
      {selectedTimeZone && (
        <p style={{
          textAlign: "center",
          color:"red" ,
          fontSize: "15px",
          fontWeight: "bolder",
          display: "block", 
          margin: "30px", 
       }}>
          Current time in {selectedTimeZone}: {selectedTime} 
        </p>
      )}
      {/* <p>List of time zone</p>

     
      {displayResults.map((result:any, index:any) => (
          <div key={index}>
            <p>
              {result.displayDate} @ {result.timeZone}
            </p>
          </div>
        ))} */}
    </>
  );
}
