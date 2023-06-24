// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../components/Button";

function StatelessComponent() {
  return (
    <div>
      <h3>Banner</h3>
      <Button buttonText="Increment" type="button" />
      <h3>Aside</h3>
      <Button buttonText="Decrement" type="button" />
      <h3>Bottom</h3>
      <Button buttonText="Scroll to Top" type="submit" />
    </div>
  );
}

export default StatelessComponent;
