import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import Table from "react-bootstrap/Table"
import TableRow from './TableRow.jsx';
import { useState } from "react"


const Booking2 =  (props) => {

let [currentClickedCell, setCurrentClickedCell] = useState(null);

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

let onCellClick = (selectedId) => {
  let element;
  if (currentClickedCell != null){
    element = document.getElementById(`${currentClickedCell[0]}:${currentClickedCell[1]}`);
    element.classList.remove("selected-cell");
  }
  element = document.getElementById(`${selectedId[0]}:${selectedId[1]}`);
  element.classList.add("selected-cell");
  setCurrentClickedCell(selectedId);
}

let minIntervals = getMinIntervalsArr(15);
let hours = getHoursArr();

return (
  <Table bordered className="table">
  {/* <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead> */}
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