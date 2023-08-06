/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'

const InputText = React.forwardRef(({ text, ...props }, ref) => {
  const _inputRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      onFocus: () => {
        _inputRef.current.focus();
        _inputRef.current.setSelectionRange(0, _inputRef.current.value.length);
      },
      openModal: () => {
        setIsOpen(true);
      }
    }
  })

  return (
    <>
      <input ref={_inputRef} {...props} />
      <div 
        className="modal"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIsOpen(false)}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default InputText