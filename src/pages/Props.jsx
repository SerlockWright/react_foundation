import React from "react";

function Props({
  renderComponentOutside,
  renderComponentByDirect: RenderComponentByDirect,
  content,
  children,
  ...rest
}) {
  console.log('rest: ', rest);
  return <div>
    <h5>Children Props</h5>
    {children}
    <hr />
    renderComponentOutside: {renderComponentOutside}
    <br />
    renderComponentByDirect:{<RenderComponentByDirect />}
    <hr />
    {content}
    <h5>Children Props</h5>
    {children}
  </div>;
}

export default Props;
