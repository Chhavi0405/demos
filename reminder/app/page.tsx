"use client";

import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<any>();
  const [addReminder, setAddReminder] = useState<any>([]);
  const dispatch = useDispatch();

  const dataReminder = useSelector((state: any) => state.reminder.data);
  console.log(dataReminder,"selector")
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
    setSelectedDate(e);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  // const showData:[] = re
  console.log(addReminder, "addremindr");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(addReminder, "value");

    if (selectedDate && addReminder) {
      const reminderData: any = {
        dated: selectedDate,
        text: addReminder,
      };

      dispatch(reminderAdd(reminderData));
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
      {/* { moment(selectedDate).format("dddd DD-MM-YYYY")} */}
      <div>
        {selectedDate && (
          <>
            <form onSubmit={handleSubmit}>
              <input
                style={{ border: "2px solid blue" }}
                type="text"
                value={addReminder}
                onChange={(e) => setAddReminder(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          </>
        )}
      </div>

      <div>
        <p>Data</p>
        <ul>
    {dataReminder?.map((item: any, index: any) => (
      <li key={index}>{item?.text}</li>
    ))}
  </ul>

      </div>
    </>
  );
}
