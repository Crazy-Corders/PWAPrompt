import { useState, useEffect } from 'react'

import './App.css'

export default function App () {
  const [promptInstall, setPromptInstall] = useState(null)

  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = async evt => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await promptInstall.userChoice
    if (outcome === 'accepted') {
      setPromptInstall(null)
    }
  }

  return (
    <div id='container'>
      <h1 id='title'>PROGRESSIVE WEB APP</h1>
      <ul id='list'>
        <li>Short loading time</li>
        <li>Good performance in poor network conditions</li>
        <li>Small size</li>
        <li>App-like features (add to home screen, offline mode, push notifications)</li>
        <li>Avoid app aggregators (Google Play, App Store, etc.)</li>
        <li>Instant updates</li>
      </ul>
      <button onClick={onClick}>
        Install
      </button>
    </div>
  )
}
