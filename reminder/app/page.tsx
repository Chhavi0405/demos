"use client";
"use strict";
import { reminderAdd } from "@/redux/reminderSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [dateArray, setDateArray] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<any>();
  const [addReminder, setAddReminder] = useState<any>("");
  const [reminderText, setReminderText] = useState<any>([
    { date: "", reminders: [] },
  ]);
  const dispatch = useDispatch();

  const dataReminder = useSelector((state: any) => state.reminder.data);
  console.log(dataReminder, "dataReminder");

  // useEffect(() => {
  //   const flattenArray: any[] = dataReminder.flat();
  //   let savedValue: any[] = [...flattenArray];
  //   //  console.log(addReminder,"addReminder")
  //   flattenArray?.map((flatArray: any) => {
  //     if (flatArray.date === selectedDate) {
  //       const index = savedValue.findIndex(
  //         (item) => item.date === selectedDate
  //       );
  //       console.log(index, "index");
  //       if (index !== -1 && selectedDate) {
  //         savedValue[index].reminders.push(addReminder);
  //       } else {
  //         savedValue.push({
  //           date: selectedDate,
  //           reminders: [addReminder],
  //         });
  //       }
  //     }
  //   });

  //   console.log(savedValue, "savedvalue");
  // }, [dataReminder, selectedDate, addReminder]);

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

  const startOfMonth: string = moment().startOf("month").format("YYYY-MM-DD ");
  const endOfMonth: string = moment().endOf("month").format("YYYY-MM-DD ");

  const handleClick = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };
  //******************************************************************************************* */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(">>>>", dataReminder);

    // const updatedReminderText = [...reminderText];
    // if (selectedDate) {
    //   const dateIndex = updatedReminderText.findIndex(
    //     (item: any) => item.date === selectedDate
    //   );
    //   console.log(dateIndex, "dateIndex");
    //   if (dateIndex !== -1) {
    //     console.log("first");
    //     updatedReminderText[dateIndex] = {
    //       date: selectedDate,
    //       reminders: [
    //         ...updatedReminderText[dateIndex]?.reminders,
    //         addReminder,
    //       ],
    //     };
    //   } else {
    //     console.log("second");
    //     updatedReminderText.push({
    //       date: selectedDate,
    //       reminders: [addReminder],
    //     });
    //   }
    let initional = [{ date: selectedDate, reminders: [addReminder] }];
    let newArr = dataReminder?.map((items: any) => {
      console.log("items", items);
      debugger;
      if (items.date == selectedDate) {
        return { ...items, reminders: [...items.reminder, addReminder] };
      } else {
        return [dataReminder, { date: selectedDate, reminders: [addReminder] }];
      }
    });

    // setReminderText(newArr);
    dispatch(reminderAdd(newArr));
  };
  // setAddReminder("");

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
          {dataReminder?.map((item: any, index: number) => ( 
            console.log(item,"itemdispatch")
            // <li key={index}>
            //   {item.date} -- {item.reminders}
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
}
