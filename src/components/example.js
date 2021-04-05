const example = {
  title: 'PWA',
  description: (() => {
    return (
      <ul style={{ listStyleType: 'circle', color: 'rgba(255, 255, 255, 0.8)' }}>
        <li style={{ padding: '10px 20px' }}>Short loading time</li>
        <li style={{ padding: '10px 20px' }}>Good performance in poor network conditions</li>
        <li style={{ padding: '10px 20px' }}>Small size</li>
        <li style={{ padding: '10px 20px' }}>App-like features (add to home screen, offline mode, push notifications)</li>
        <li style={{ padding: '10px 20px' }}>Avoid app aggregators (Google Play, App Store, etc.)</li>
        <li style={{ padding: '10px 20px' }}>Instant updates</li>
      </ul>
    )
  })
}

export default example
