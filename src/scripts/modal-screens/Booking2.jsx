import Table from "react-bootstrap/Table"
import TableRow from './TableRow.jsx';
import { useState, useEffect } from "react"
import { getContextType } from "../context/AppContext"

let getMinIntervalsArr = (interval) => {
  let minIntervalsArray = [];
  for (let i = 0; i < 60; i = i + interval) minIntervalsArray.push(i);
  return minIntervalsArray;
}

let getHoursArr = () => {
let hoursArr = [];
for (let i = 12; i < 24; i++) hoursArr.push(i);
return hoursArr;
}

const Booking2 =  ({ setIsNextDisabled }) => {

  const { bookingData, setBookingData } = getContextType('ModalContext') 

  let onCellClick = (selectedId) => {
    setBookingData({ ...bookingData, time:selectedId});
    setIsNextDisabled(false);
  }

  useEffect(() => {
    if (bookingData.time[0] && bookingData.time[1]) setIsNextDisabled(false);
  }, []);

  let minIntervals = getMinIntervalsArr(15);
  let hours = getHoursArr();

  return (
    <Table bordered className="table">
    <tbody>
    {hours.map((hour, index) => (
      <TableRow 
        hour={hour} 
        minIntervals={minIntervals} 
        key={hour} 
        isLast={index == hours.length - 1} 
        onCellClick={onCellClick} 
      />
    ))}
    </tbody>
    </Table>
  )
}
export default Booking2