import React from 'react'
import { createPortal } from 'react-dom';
import PurePortal from '../components/PurePortal';

function ReactPortal() {
  const [showModal, setShowModal] = React.useState(false);
  const [todo, setTodo] = React.useState(null)


  return (
    <div>
      {todo}
      <button onClick={() => {
        setShowModal(true)
        setTodo({}) // error
      }}>
        Show modal using a portal
      </button>

      {/* {showModal && (
        <PurePortal>
          <div className="modal" style={{
            display: 'block'
          }}>
            <div>
              With a portal, we can render content into a different
              part of the DOM, as if it were any other React child.
            </div>
            This is being rendered inside the #modal-container div.
            <button onClick={() => setShowModal(false)}>
              Hide modal
            </button>
          </div>
        </PurePortal>
      )} */}

      {showModal && (
        createPortal(
          <div className="modal" style={{
            display: 'block'
          }}>
            <div>
              With a portal, we can render content into a different
              part of the DOM, as if it were any other React child.
            </div>
            This is being rendered inside the #modal-container div.
            <button onClick={() => setShowModal(false)}>
              Hide modal
            </button>
          </div>,
          document.body
      ))}
    </div>
  )
}

export default ReactPortal