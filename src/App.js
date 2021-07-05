import './App.css';
import Button from "./components/Button";
import MyElement from "./components/MyElement";
import MyClass from "./components/MyClass";
import LifeCycle from './components/LifeCycle';
import React, {Component} from 'react';
import ComponentA from "./components/ComponentA";
import Count from './components/Count';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

export const MyContext = React.createContext()

function App() {
  return (
    <div className="App">
       <MyClass schools = {["Havard", "Yale", "Hopkins"]}/>
      <Button name="Daniel"/>
      <MyElement lib = {["laravel", "flask", "react", "vue.js"]}/>
      <LifeCycle/>
<MyContext.Provider value="This is useContext in use">
    <ComponentA />
</MyContext.Provider>
<Count/>
  <Counter/>
<FetchData/>
</div>

    );
}

export default App;
