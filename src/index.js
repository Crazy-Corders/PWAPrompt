import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import ServiceWorker from '@crazy-corders/serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ServiceWorker forceInsatll={{styles:{{container: {color: 'black'}}} descrtipion:'adasda'}} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
