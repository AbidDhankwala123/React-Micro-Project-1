import React from 'react'
import "../styles/CardBack.css"


const CardBack = ({card}) => {
  return (
    <div className='card-back'>
        <div className='black-strip'></div>
        <div className='gray-strip'>
            <input className='cvc' placeholder='000' readOnly type="text" value={card?.cvc || ''}/>
        </div>
        <div className='lines-container'>
            <section className='section-1'>
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
                <div className="lines line4"></div>
            </section>

            <section className='section-2'>
                <div className="lines line5"></div>
                <div className="lines line6"></div>
                <div className="lines line7"></div>
                <div className="lines line8"></div>
            </section>

            <section className='section-3'>
                <div className="lines line9"></div>
                <div className="lines line10"></div>
                <div className="lines line11"></div>
                <div className="lines line12"></div>
            </section>
        </div>  
      
    </div>
  )
}

export default CardBack
