import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import MemoComponent from '../components/MemoComponent';
import { addTodo } from '../states/todo.action';

/*
- Khi component A đã dc wrapper bởi React.memo. Và component A này nhận vào 1 cái props là một function A
   - Nếu function A ko xài React.useCallback -> React.memo bị vô nghĩa.
   - function A xài React.useCallback -> React.memo mới có ý nghĩa.
*/


function Memo() {
  const [forceUpdate, setForceUpdate] = React.useState(Date.now());
  const [count, setCount] = React.useState(0);
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todo.todos)

  const [carts, setCarts] = React.useState([{ price: 10, quatity: 2}]);

  console.log("rende Memo ------> :", todos)

  // re-create new function when component re-render (A)
  // const updateTime = () => {}

  // use callback A
	const updateTime = React.useCallback(() => {
		console.log('fucntion updateTime: ', count); // 0
	}, [count])

	// return memorized value
	const total = React.useMemo(() => {
		return count + 10;
	}, [count])

	// update cart
	const price = React.useMemo(() => {
		return carts.reduce((acc, currItem) => acc += currItem.price * currItem.quatity, 0);
	}, [carts])

  return (
    <div>
      <h3>Memo</h3>
				<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
				<button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
				<button onClick={() => setForceUpdate(Date.now())}>Force Update</button>
				<button onClick={() => {
					const newProduct = { price: 20, quatity: 1}
					setCarts(prevState => ([...prevState, newProduct]))
					const todos = [
						{
							id: 1,
							title: 'javascript'
						},
						{
							id: 2,
							title: 'angular'
						}
					]
					dispatch(addTodo(todos))
				}}
				>
				Add to Cart
				</button>

				Count: {count} <br />
				Total: {total} <br />
				price: {price}
			<br />

			<MemoComponent forceUpdate={forceUpdate} updateTime={updateTime}  />

    </div>
  )
}

export default memo(Memo)
