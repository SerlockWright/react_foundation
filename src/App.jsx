/* eslint-disable no-unused-vars */
import { Issue, IssueCreate, IssueEdit } from "./pages/Issues";
import StatelessComponent from "./pages/StatelessComponent";
import StatefullComponent from "./pages/StatefullComponent";
import Props from "./pages/Props";
import ButtonState from "./components/ButtonState";
import Alert from "./components/Alert";
import Form from "./components/Form";
import ComposeComponent from './pages/ComposeComponent';
import State from "./pages/State";

function App() {
  console.log('App Component')
  return (
    <>
      <ComposeComponent />
      <hr />
      <h1>React</h1>
      <Issue />
      <h2>Stateless Component</h2>
      <StatelessComponent />
      <h2>Statefull Component</h2>
      <StatefullComponent />
      <hr />
      <h2>Props</h2>
      <Props
        title="Props Title"
        number={10}
        isAuth={true}
        todo={["todo1", "todo2"]}
        users={{
          name: "john",
          age: 20
        }}
        onClick={() => { }}
        renderComponentOutside={<ButtonState />}
        renderComponentByDirect={ButtonState}
      >
        Alert text
        <Alert />
      </Props>
      <h4>Form</h4>
      <Props
        title="Props Form"
        number={10}
        isAuth={true}
        todo={["todo1", "todo2"]}
        users={{
          name: "john",
          age: 20
        }}
        onClick={() => { }}
        renderComponentOutside={<ButtonState />}
        renderComponentByDirect={ButtonState}
      >
        From Text
        <Form />
      </Props>

      <h1>State</h1>
      <State />
    </>
  );
}

export default App;
