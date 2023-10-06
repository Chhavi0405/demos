"use client";

import moment from "moment-timezone";
import { useEffect, useState } from "react";
export default function Home() {
  useEffect(() => {
    getTimeZone();
  }, []);
  const [zoneArray, setZoneArray] = useState<any>([]);
  const [selectedZone, setSelectedZone] = useState<any>();
  const [rawTime, setRawTime] = useState("00:00");
  // const [selectedPlaceTime,setSelectedPlaceTime] = useState<any>("00:00")
  const [displayResults, setDisplayResults] = useState<any>([]);

  const getTimeZone = () => {
    let zoneArrayss = [];
    const timezone = moment.tz.names();
    zoneArrayss = timezone;
    setZoneArray(zoneArrayss);
  };
  // const timeZones = ["GMT", "Europe/Madrid", "Asia/Tokyo", "Asia/Kolkata"];

  const placeZone =()=>{
    const timed = moment(`${rawTime}`, "HH:mm ");

    const convert: any = timed._d;
    let displayDate;
    const results = [];
    for (let timeZone of zoneArray) {
      displayDate = Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        // hour12: true,
        timeZone: timeZone,
      }).format(convert);
      results.push({ timeZone, displayDate });
      // console.log("%s @ %s", displayDate, timeZone);
    }
    setDisplayResults(results);
  }
  // const placeTime = placeZone();
  useEffect(() => {
    placeZone();
  }, [rawTime, zoneArray]);

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
      <div>
        <label>enter time:</label>
        <input
          className="time-input"
          type="time"
          onChange={(ev) => setRawTime(ev.target.value)}
          value={rawTime}
        />
      </div>
      <p>entered time::{rawTime}</p>
      <hr />
    
      <hr />
      <p>List of time zone</p>

     
      {displayResults.map((result:any, index:any) => (
          <div key={index}>
            <p>
              {result.displayDate} @ {result.timeZone}
            </p>
          </div>
        ))}
    </>
  );
}
