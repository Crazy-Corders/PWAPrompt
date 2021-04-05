import useServiceWorker from './useServiceWorker'

import PWAPrompt from './PWAPrompt'

export default function App ({ enablePWAPrompt, title, description, customStyles }) {

  useServiceWorker()

  if (enablePWAPrompt) return <PWAPrompt title={title} description={description} customStyles={customStyles} />

  return (
    <div></div>
  )
}
