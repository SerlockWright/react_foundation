import React, { memo } from 'react'


function MemoComponent() {
  console.log("rende child MemoComponent ------> :")

  return (
    <div>
     This is child MemoComponent

     <button >UpdateTime</button>

    </div>
  )
}

// function customEqual(prevProps, nextProps) {
//   return prevProps.forceUpdate === nextProps.forceUpdate;
// }

// export default memo(MemoComponent, customEqual)
export default memo(MemoComponent)
