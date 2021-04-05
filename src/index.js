import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

const description = "Otha is an emotion rather than an just a tamil equivalent of the F word. It can be used interchangeably with 'Watha' which is literally the same word but with a 100 times more emotion. Otha is an exclamation, a period, something that starts a sentence, can start a fight or even start a new bond. This word must be embraced by everybody for the sheer beauty that it is. Other forms of otha include : Watha, Ngotha, Gotha, Watha but the tongue also sticks out"

const styles = {
  title: {
    color: 'red',
    fontStyle: 'Italic'
  },
  description: {
    color: 'green',
    textDecoration: 'line-through'
  },
  background: {
    backgroundColor: 'rgba(0, 0, 100)'
  },
  installButton: {
    fontSize: '20px',
    backgroundColor: 'rgba(0, 0, 0)'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App enablePWAPrompt title='Oaththa' description={description} customStyles={styles} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
