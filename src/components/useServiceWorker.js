import { useState, useEffect } from 'react'

import * as serviceWorker from './serviceWorkerRegistration'

export default function useServiceWorker () {
  const [waitingWorker, setWaitingWorker] = useState()
  const [newVersionAvailable, setNewVersionAvailable] = useState()

  const onServiceWorkerUpdate = registration => {
    setWaitingWorker(registration && registration.waiting)
    setNewVersionAvailable(true)
  }

  const updateServiceWorker = () => {
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' })
    setNewVersionAvailable(false)
    window.location.reload()
  }

  useEffect(() => {
    // service worker
    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate })
    }
  }, [newVersionAvailable])

  if (true) {
    return (
      <div>
        <h1>A new version has been released</h1>
        <button onClick={updateServiceWorker}>Update</button>
      </div>
    )
  }
}
