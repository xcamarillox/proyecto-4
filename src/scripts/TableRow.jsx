const TableRow =  (props) => {

let handleClick = (e)=> props.onCellClick(e.target.innerHTML.split(':', 2))

let getTimeLabel = (minInterval) => {
  return `${props.hour}:${minInterval < 10? '0' + minInterval: minInterval}`;
}

return (
    <tr>
      {props.minIntervals.map((minInterval) => (
        !(props.isLast && minInterval > 30) && 
        <td 
          id={getTimeLabel(minInterval)}
          key={minInterval} 
          onClick={handleClick}>
              {getTimeLabel(minInterval)}
        </td> 
      ))}
    </tr>
)

}
export default TableRow