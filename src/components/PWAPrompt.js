import { useState, useEffect } from 'react'

import styles from './styles'
import example from './example'

export default function App ({ title, description, customStyles }) {
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
    <div style={{...styles.body, ...customStyles?.body}}>
      <div style={{...styles.background, ...customStyles?.background}}>
        <h1 style={{...styles.title, ...customStyles?.title}}>{title ? title : example.title}</h1>
        {description && <p style={{...styles.description, ...customStyles?.description}}>{description}</p>}
        {!description && <example.description />}
        <button style={{...styles.installButton, ...customStyles?.installButton}} onClick={onClick}> Install </button>
      </div>
    </div>
  )
}
