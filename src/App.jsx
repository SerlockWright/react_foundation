/* eslint-disable no-unused-vars */
import React from "react";
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
import UseReducer from './pages/UseReducer';
import EffectHook from './pages/EffectHook';
import Button from "./components/Button";
import Books from "./pages/Books";
import UseRef from "./pages/UseRef";
import Memo from './pages/Memo';
import CustomHook from './pages/CustomHook';

// context
import { BookProvider } from "./contexts/BookContext";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import { Link, NavLink ,Route, Routes } from "react-router-dom";
import User from "./pages/User/User";
import Profile from "./pages/User/Profile";
import Account from "./pages/User/Account";
import Cart from "./pages/User/Cart";

function App() {
  console.log('App Component')
  const [isMount, setIsMount] = React.useState(true)

  return (
    <>

      <Link to="/compose-component">Compose Component</Link>
      <Link to="/stateless-component">Stateless Component</Link>
      <NavLink 
        to="/statefull-component" 
        // className="navLink"
        className={value => {
          return `navLink ${value.isActive ? 'selected' : 'unselected'}`
        }}        
        replace
      >
        Statefull Component
      </NavLink>
      <NavLink to="/user">
        User
      </NavLink>

      <hr />
      <main>
        <Routes>
          <Route path="/compose-component" element={<ComposeComponent />} />
          <Route path="/stateless-component" element={<StatelessComponent />} />
          <Route path="/statefull-component" element={<StatefullComponent />} />
          <Route path="/user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </main>
      
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

      <br />
      <h1>UseReducer</h1>
      <UseReducer />

      <br />
      <h1>Effect Hooks</h1>
      <Button buttonText='Toggle Mount' onClick={(preState) => setIsMount(!preState)} />
      <br />
      {isMount && <EffectHook />}

      <br />
      <h1>Book Context</h1>
      <BookProvider>
        <Books />
      </BookProvider>

      <br />
      <UseRef />

      <br />
      <UseImperativeHandle />

      <br />
      <hr />
      <Memo />

      <br/> 
      <hr />
      <CustomHook />
    </>
  );
}

export default App;
