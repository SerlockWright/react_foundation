import PropTypes from 'prop-types'; // ES6

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

Props.propTypes = {
  renderComponentOutside: PropTypes.element,
  renderComponentByDirect: PropTypes.elementType,
  content: PropTypes.string,
  children: PropTypes.element,
  title: PropTypes.string,
  number: PropTypes.number,
  isAuth: PropTypes.bool,
  todo: PropTypes.array,
  // users: PropTypes.object,
  users: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  onClick: PropTypes.func
}
