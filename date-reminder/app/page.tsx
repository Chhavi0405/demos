"use client";

import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import _ from 'lodash';

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
    let dateArray = [];
    let currentDate = moment(startOfMonth);
    let stopDate = moment(endOfMonth);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    // setDateArray(dateArray.map((x) => x));
    setDateArray(_.map(dateArray,(x)=>x))
  };

  useEffect(() => {
    getDate();
  }, []);

  const startOfMonth: string = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: string = moment().endOf("month").format("YYYY-MM-DD ");

  const handleClick = (e: string) => {
    setSelectedDate(e);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDate && addReminder) {
      const updatedReminderText: ReminderItem[] = [...reminderText];

      // const dateIndex = updatedReminderText.findIndex(
      //   (item: { date: string }) => item.date === selectedDate
      // );
      const dateIndex = _.findIndex(updatedReminderText,(item: { date: string }) => item.date === selectedDate)
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
          {/* {dateArray?.map((dates: string) => (
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
          ))} */}
          {_.map(dateArray,(dates)=>(
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
            <br />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
      <div>
        <p>Data</p>
        <ul>
          {
          // reminderText.map((item: ReminderItem) => (
          //   <li key={item.date}>
          //     {moment(item.date).format("dddd DD-MM-YY")} - {item.reminders}
          //   </li>
          // ))
          }
       {_.map(_.sortBy(reminderText, 'date'), (item) => (
  <li key={item.date}>
    {moment(item.date).format("dddd DD/MM/YY")} :- {item.reminders}
  </li>
))}
                      
          
        </ul>
      </div>
    </>
  );
}
