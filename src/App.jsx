import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Colors from './Data/color.json'
import Quotes from './Data/data.json'

function App() {

  const numbersRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const elementRandom = array => {
    const i =  numbersRandom(array)
    return array[i]
  }

  const [quotesRandom, setQuotesRandom] = useState(elementRandom(Quotes))
  const [colorsRandom, setColorsRandom] = useState(elementRandom(Colors))

  const clickButtonRandom = () => {
    setQuotesRandom(elementRandom(Quotes))
    setColorsRandom(elementRandom(Colors))
  }

  return (
    <div className="App">
      <QuoteBox
        quotesRandom={quotesRandom}
        colorsRandom={colorsRandom}
        clickButtonRandom={clickButtonRandom}
      />
    </div>
  )
}

export default App
