/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../components/Button";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const todos = state.todo.todos;
  console.log('mapStateToProps: ', todos)

  const todoItem = todos.find(todo => todo.id === Number(ownProps.todoId))

  console.log('mapStateToProps: ', todoItem)

  return {
    todoItem
  }
}

function StatelessComponent({ todoItem }) {
  console.log('todoItem: ', todoItem)
  return (
    <div>
      <h3>Banner</h3>
      <Button buttonText="Increment" type="button" />
      <h3>Aside</h3>
      <Button buttonText="Decrement" type="button" />
      <h3>Bottom</h3>
      <Button buttonText="Scroll to Top" type="submit" />
      <h3>Todo Item from redux</h3>
      Id: {todoItem?.id} <br />
      Title: {todoItem?.title} 
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(StatelessComponent);
