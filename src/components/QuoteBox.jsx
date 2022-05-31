import React from 'react'

const QuoteBox = ({ quotesRandom, colorsRandom, clickButtonRandom }) => {
  return (
    <div style={{ backgroundColor: `${colorsRandom}` }} className='main'>
      <div className='Card'>
        <span className='SpamIcon'><i style={{ color: `${colorsRandom}` }} class="fa-solid fa-quote-left fa-3x"></i></span>
        <div className='card-container'>
          <div className='quote'>
            <p style={{ color: `${colorsRandom}` }}>{quotesRandom.quote}</p>
          </div>
          <div className='autor'>
            <h1 style={{ color: `${colorsRandom}` }}>"{quotesRandom.author}"</h1>
          </div>
        </div>
      </div>
      <div className='button'>
          <button
            style={{ backgroundColor: `${colorsRandom}` }}
            onClick={clickButtonRandom}
          ><i class="icon fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  )
}

export default QuoteBox