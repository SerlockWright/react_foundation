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
import HandleEvent from "./pages/HandleEvent";
import ConditionalRendering from "./pages/ConditionalRendering";
import GuestGreeting from "./pages/GuestGreeting";
import List from './pages/List';
import LiftingStateUp from './pages/LiftingStateUp';
import LiftingStateUpPattern from './pages/LiftingStateUpPattern';
import FormComponent from './pages/Form';
import BoxColor from "./pages/BoxColor";
import StateHook from './pages/StateHook';

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
      <br />
      <br />

      <h1>HandleEvent</h1>
      <HandleEvent />
      <br />

      <h1>ConditionalRendering</h1>
      <ConditionalRendering />

      <h1>GuestGreeting</h1>
      <GuestGreeting />

      <h1>List</h1>
      <List />

      <h1>Lifting State Up</h1>
      <LiftingStateUp />

      <h1>LiftingStateUpPattern</h1>
      <LiftingStateUpPattern />

      <h1>Form</h1>
      <FormComponent />

      <h1>Sample App: BoxColor</h1>
      <BoxColor />

      <br />
      <h1>StateHook</h1>
      <StateHook />
    </>
  );
}

export default App;
