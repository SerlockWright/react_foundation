import React, { memo } from 'react'


function MemoComponent({ updateTime }) {
  console.log("rende child MemoComponent ------> :")

  return (
    <div>
     This is child MemoComponent

     <button onClick={updateTime}>UpdateTime</button>

    </div>
  )
}

// function customEqual(prevProps, nextProps) {
//   return prevProps.forceUpdate === nextProps.forceUpdate;
// }

// export default memo(MemoComponent, customEqual)
export default memo(MemoComponent)
