import useServiceWorker from './useServiceWorker'

import PWAPrompt from './PWAPrompt'

export default function App ({ enablePWAPrompt, title, description, customStyles }) {

  const content = useServiceWorker(enablePWAPrompt)

  if (enablePWAPrompt) return <PWAPrompt title={title} description={description} customStyles={customStyles} />

  return (
    <div>
      {content}
    </div>
  )
}



/*

App.defaultProps = {
  
}
 - Rename APP to index.js
 - Remove example.js -> integrate with React.propTypes
 - Move useServiceWorker and serviceWorkerRegistration inside hooks folder

*/