import './App.css';
import Button from "./components/Button"
import MyElement from "./components/MyElement"
import MyClass from "./components/MyClass"
import Forms from "./components/Forms"
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      <Button name="Daniel"/>
      <MyElement lib = {["laravel", "flask", "react", "vue.js"]}/>
      <MyClass schools = {["Havard", "Yale", "Hopkins"]}/>
      <Forms/>
      <LifeCycle/>
    </div>
  );
}

export default App;
