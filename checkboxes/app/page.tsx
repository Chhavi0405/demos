'use client'
import React, { useState ,useEffect } from 'react';

export default function Home() {
  const arrayTime = [
    {
        "id": 1822,
        "weekday": "Monday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.781Z",
        "updated_at": "2023-03-10T11:45:48.781Z"
    },
    {
        "id": 1823,
        "weekday": "Tuesday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.797Z",
        "updated_at": "2023-03-10T11:45:48.797Z"
    },
    {
        "id": 1824,
        "weekday": "Wednesday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.811Z",
        "updated_at": "2023-03-10T11:45:48.811Z"
    },
    {
        "id": 1825,
        "weekday": "Thursday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.825Z",
        "updated_at": "2023-03-10T11:45:48.825Z"
    },
    {
        "id": 1826,
        "weekday": "Friday",
        "opening_time": "02:30",
        "closing_time": "11:30",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.840Z",
        "updated_at": "2023-03-10T11:45:48.840Z"
    },
    {
        "id": 1827,
        "weekday": "Saturday",
        "opening_time": "02:30",
        "closing_time": "19:30",
        "status": true,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.854Z",
        "updated_at": "2023-03-10T11:45:48.854Z"
    },
    {
        "id": 1828,
        "weekday": "Sunday",
        "opening_time": "10:00",
        "closing_time": "22:00",
        "status": false,
        "business_id": 57,
        "created_at": "2023-03-10T11:45:48.868Z",
        "updated_at": "2023-03-10T11:45:48.868Z"
    }
]

  const [arr, setArr] = useState<any>(arrayTime);

  const [checkedStatus, setCheckedStatus] = useState<any>({});

  useEffect(() => {
    const initialChecked:any = {};
    arrayTime.forEach((item) => {
      initialChecked[item.id] = item.status;
    });
     
    setCheckedStatus(initialChecked);
  }, []);


  const handleCheckbox = (id: any, value:any) => {
    console.log(id,"id",value,"checked")
    setCheckedStatus({ ...checkedStatus, [id]: value });
    const updatedArr = arr.map((item: any) => {
      if (item.id === id) {
        return { ...item, status: value };
      }
      return item;
    });
    setArr(updatedArr);
  };

  return (
    <>
      <h3 style={{ textAlign: 'center', textDecorationLine: 'underline' }}>Multiple checkboxes</h3>
      <br />
      <div style={{ textAlign: 'center' }}>
        {arrayTime?.map((data: any) => {
          return (
            <ul key={data.id}>
              <li>
                <input
                  id={`checkbox-${data.id}`}
                  type="checkbox"
                  value={data.id}
                  checked={checkedStatus[data.id] }
                  onChange={(e:any) => handleCheckbox(data.id, e.target.checked)}
                />
                <label htmlFor={`checkbox-${data.id}`}>
                  {data.weekday} &nbsp;
                  <span>
                    {data.opening_time} - {data.closing_time}
                  </span>
                </label>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
