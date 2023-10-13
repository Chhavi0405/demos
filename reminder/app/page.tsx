"use client";

import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<any>();
  const [addReminder, setAddReminder] = useState<any>("");
  const [reminderText, setReminderText] = useState<any>([
   { date:"",reminders:[]}
  ]);
  const dispatch = useDispatch();

  
  const dataReminder = useSelector((state: any) => state.reminder.data);
  // console.log(dataReminder, "dataReminder");
  
useEffect(()=>{
// {dataReminder?.map((item:any)=>(...item , date:()))}
// console.log(dataReminder,"dta")
},[])
 
const flattenArray:[]= dataReminder.flat();
console.log(flattenArray,"flat");




// const result:any = [];
// flattenArray.forEach((e:any, i:any) => {
//    const indexOfExisting = result.findIndex((x:any) =>  x.date === selectedDate);
//    if (indexOfExisting === -1) {
//      result.push({
//          date: selectedDate,
//          reminders: [e.reminders]
//      })
//    } else {
//      result[indexOfExisting].reminders.push(e.reminders);
//    }
// });

// console.log(result,"wert")


// const dateIndex :any
// flattenArray.findIndex(
//   (item: any) => (
//     (item?.date === selectedDate))
// );


// const arrayHashmap = flattenArray.reduce((obj:any, item:any) => {
//   obj[item.date] ? obj[item.date].reminders.push(...item.reminders) : (obj[item.date] = { ...item });
//   return obj;
// }, {});

// console.log(arrayHashmap,"arrayhashmap")
// const mergedArray = Object.values(arrayHashmap);

// console.log(mergedArray,"mergedArray");



Object.keys(flattenArray).forEach(function(key:any, index:any) {
  console.log( flattenArray[key],"object")
});




  const lengths = dataReminder.map((a: any) => a.length);
  lengths.indexOf(Math.max(...lengths));
 

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

  const handleClick = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedDate && addReminder) {
      const updatedReminderText = [...reminderText];
      console.log(updatedReminderText,"reminder text");
      
      const dateIndex = updatedReminderText.findIndex(
        (item: any) => item.date === selectedDate
      );
      if (dateIndex !== -1) {
        updatedReminderText[dateIndex] = {
          date: selectedDate,
          reminders: [...updatedReminderText[dateIndex].reminders, addReminder],
        };
      } else {
        updatedReminderText.push({
          date: selectedDate,
          reminders: [addReminder],
        });
      }
      setReminderText(updatedReminderText);
      dispatch(reminderAdd(updatedReminderText));
    }
    setAddReminder("");
  };

  return (
    <>
      <div style={{ textAlign: "center", fontWeight: "bolder" }}>
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
      <br />
      {moment(selectedDate).format("dddd DD-MM-YYYY")}
      <div>
        {selectedDate && (
          <form onSubmit={handleSubmit}>
            <input
              style={{ border: "2px solid blue" }}
              type="text"
              value={addReminder}
              onChange={(e) => setAddReminder(e.target.value)}
            />
            <br />
            {/* <button type="button" onClick={handleAddMore}>add More</button> */}
            <br />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
      <div>
        <p>Data</p>
        <ul>
          {/* {dataReminder?.map((item: any, index: any) => ( 
            console.log(item,"itemdispatch")
            <li key={index}>
              {item.date} -- {item.reminder}
            </li>
          ))} */}
          
        </ul>
      </div>
    </>
  );
}
