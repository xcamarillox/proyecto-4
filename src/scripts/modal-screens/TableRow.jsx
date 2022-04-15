
import { getContextType } from "../context/AppContext"

const TableRow =  (props) => {

  const { bookingData } = getContextType('ModalContext') 
  let handleClick = (e) => props.onCellClick(e.target.innerHTML.split(':', 2))
  let getTimeLabel = (minInterval) => `${props.hour}:${minInterval < 10? '0' + minInterval: minInterval}`;
  return (
      <tr>
        {props.minIntervals.map((minInterval) => (
          !(props.isLast && minInterval > 30) && 
          <td 
            className={ bookingData.time[0] == props.hour && bookingData.time[1] == minInterval ? "selected-cell": ""}
            key={minInterval} 
            onClick={handleClick}>
                {getTimeLabel(minInterval)}
          </td> 
        ))}
      </tr>
  )
}
export default TableRow