"use client";

import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [dateArray, setDateArray] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [addReminder, setAddReminder] = useState<string>("");
  const [reminderText, setReminderText] = useState<string[]>([]);
  const dispatch = useDispatch();

  const dataReminder = useSelector((state:any) => state.reminder.data);

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
    setDateArray(dateArray.map((x) => x));
  };

  useEffect(() => {
    getDate();
  }, []);

  const startOfMonth: string = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: string = moment().endOf("month").format("YYYY-MM-DD ");

  const handleClick = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedDate && addReminder) {
      let updatedReminderText: any = [...reminderText];

      const dateIndex = updatedReminderText.findIndex(
        (item:any) => item.date === selectedDate
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
          {dateArray?.map((dates: string) => (
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
          
           {dataReminder?.map((item: any) => ( 
            <li key={item}>
              {moment(item?.date).format('dddd DD-MM-YY')} - {item?.reminders}
            </li>
          ))}
          
        </ul>
      </div>
    </>
  );
}
