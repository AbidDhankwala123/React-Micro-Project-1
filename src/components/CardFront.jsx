import React from 'react'
import "../styles/CardFront.css"


const CardFront = ({card}) => {
  
  let number = card.number;
  let n1 = '';
  let n2 = '';
  let n3 = '';
  let n4 = '';

  if(number !== undefined){
    n1 += number.slice(0,4);
    n2 += number.slice(4,8);
    n3 += number.slice(8,12);
    n4 += number.slice(12,16);
  }
  return (
    <div className='card-front'>
        <div className='circle-1'></div>
        <div className='circle-2'></div>

        <div className='display-card-number'>
          <input className='number' type="text" value={number?n1 : ''} placeholder='0000' readOnly/>
          <input className='number' type="text" value={number?n2 : ''} placeholder='0000' readOnly/>
          <input className='number' type="text" value={number?n3 : ''} placeholder='0000' readOnly/>
          <input className='number' type="text" value={number?n4 : ''} placeholder='0000' readOnly/>
        </div>

        <div className="display-user-details">
          <input type="text" className='month' placeholder='JANE APPLESEED' value={card?.name || ''} readOnly/>
          <input type="text" className='year' placeholder='00/00' value={(card?.month || '') + (card?.year || '')} readOnly/>             
        </div>
    </div>
    
  )
}
CardFront.defaultProps = {
  name : "Jane Appleseed",
}
export default CardFront
