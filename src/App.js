import './App.css';
import Button from "./components/Button";
import MyElement from "./components/MyElement";
import MyClass from "./components/MyClass";
import LifeCycle from './components/LifeCycle';
import React, {Component} from 'react';
import ComponentA from "./components/ComponentA";
import Count from './components/Count';
import Counter from './components/Counter';
import EffectHook from './components/EffectHook';

export const MyContext = React.createContext()

function App() {
  return (
    <div className="App">
      <Button name="Daniel"/>
      <MyElement lib = {["laravel", "flask", "react", "vue.js"]}/>
      <MyClass schools = {["Havard", "Yale", "Hopkins"]}/>
      <LifeCycle/>
<MyContext.Provider value="This is a context value">
    <ComponentA />
</MyContext.Provider>
<Count/>
<Counter/>
<EffectHook/>
</div>

    );
}

export default App;
