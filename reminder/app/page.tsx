"use client";

import { dated } from "@/redux/dateSlice";
import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<any>();
  const [addText, setAddText] = useState<any>();
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.reminder.data);
  console.log(data, "data");
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    getDate();
  }, []);

  const startOfMonth: any = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: any = moment().endOf("month").format("YYYY-MM-DD ");

const handleClick =(e:any)=>{
  setSelectedDate(e)
  // dispatch(dated(selectedDanp te))
  console.log(e.target.value,"check")
}

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

const handleText =(e:any)=>{
  console.log(e.target.value,"text")
setAddText(e.target.value)
}

const handleSubmit = (event:any)=>{
  event.preventDefault();
console.log(addText,"value")
dispatch(reminderAdd(addText))
setAddText(event.target.value)
}


  return (
    <>
      <div style={{textAlign:"center",fontWeight:"bolder"}}>
        Add Reminder
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
      </div>
      <>
       { selectedDate && (<form onSubmit={handleSubmit}>
        {selectedDate} is & reminder is &nbsp;
        <input 
        style={{color:'red',border:'2px solid black'}}
        type="text"
        value={addText}
        onChange={handleText}
        />
          <button type="submit">save</button>
        </form>)
         }     
      </>
      
    </>
  );
}
