import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import MyElement from "./components/MyElement"

function App() {
  return (
    <div className="App">
      <Button name="Daniel"/>
      <MyElement lib = {["laravel", "flask", "react", "vue.js"]}/>
    </div>
  );
}

export default App;
