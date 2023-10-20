"use client";

import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { map, sortBy, findIndex } from "lodash";

interface ReminderItem {
  date: string;
  reminders: string[];
}

export default function Home() {
  const [dateArray, setDateArray] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [addReminder, setAddReminder] = useState<string>("");
  const [reminderText, setReminderText] = useState<ReminderItem[]>([]);
  const dispatch = useDispatch();

  const dataReminder = useSelector((state: RootState) => state.reminder.data);

  useEffect(() => {
    console.log("a", dataReminder, selectedDate);
    setReminderText(dataReminder);
  }, [dataReminder, selectedDate, addReminder]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDate = () => {
    let temp = [];
    let currentDate = moment(startOfMonth);
    console.log(currentDate, "currentdate");
    let stopDate = moment(endOfMonth);

    console.log(stopDate, "stop");
    while (currentDate <= stopDate) {
      temp.push(moment(currentDate).format("DD-MMMM-YYYY"));
      currentDate = moment(currentDate).add(1, "days");
    }
    setDateArray(temp);
  };
  console.log(dateArray, "dateArray");
  useEffect(() => {
    getDate();
    console.log("first");
    
  }, []);

  const startOfMonth: string = moment()
    .startOf("month")
    .format("DD-MMMM-YYYY ");
  const endOfMonth: string = moment().endOf("month").format("DD-MMMM-YYYY ");

  // const handleClick = (e: string) => {
  //   setSelectedDate(e);
  // };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedDate(event.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDate && addReminder) {
      const updatedReminderText: ReminderItem[] = [...reminderText];

      const dateIndex = findIndex(
        updatedReminderText,
        (item: { date: string }) => item.date === selectedDate
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
      dispatch(reminderAdd(updatedReminderText));
      setReminderText(updatedReminderText);
    }
    setAddReminder("");
  };

  const sortedData: ReminderItem[] = sortBy(dataReminder, "date");
  console.log(sortedData, "sorted");

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
        Add Reminder
      </h1>

      <div 
        className="border-2 border-blue-500 text-center;"   >  
      
        <label>choose Date </label>
        <br />
        <select
          value={selectedDate || ""}
          onChange={handleDateChange}
          className="border-2 border-red-500 text-center;" 
        >
          <option value="">Select a date</option>

          {map(dateArray, (dates) => {
            return(
            <option
              key={dates}
              style={{
                color:
                  dates >= moment().format("DD-MMMM-YYYY") ? "black" : "gray",
              }}
              value={dates}
              disabled={dates < moment().format("DD-MMMM-YYYY")}
            >
              <>{moment(dates).format("DD MMMM YYYY")}</>
            </option>
          )})}
        </select>
      </div>

      <br />
      {/* {moment(selectedDate).format("dddd DD-MMMM-YYYY")} */}
      <>
        {selectedDate && (
          <form onSubmit={handleSubmit}>
            <input
              style={{ border: "2px solid blue" }}
              type="text"
              value={addReminder}
              onChange={(e) => setAddReminder(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        )}
      </>
      
      <>
        <h3>Data</h3>

        {map(sortedData,(item, index: number) => {
          return(
          <div key={index}>
            {/* <h6>{moment(item.date).format("dddd DD-MMMM-YYYY ")}</h6> */}
           <h6> {item?.date} </h6>
            <ul>
              {map(item?.reminders,(data, ReminderIndex: number) => {
                return(
                <li key={ReminderIndex}>{data}</li>
              )})}
            </ul>
          </div>
        )})}
      </>
    </>
  );
}
