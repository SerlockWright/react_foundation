import React from 'react'
import ReactDOM from 'react-dom';

function PurePortal({ children }) {
  const [container] = React.useState(document.createElement('div'))
  container.classList.add('ads')
  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}

export default PurePortal