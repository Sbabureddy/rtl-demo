import "./App.css";
import SayHello from "./components/SayHello";
import Counter from "./components/Counter";
import Paginate from "./components/Paginate";

function App() {
  return (
    <div className="App">
      <h2>React Testing Library Demo App Travis CI/CD</h2>
      <SayHello name="React" />
      <Counter />
      <Paginate />
    </div>
  );
}

export default App;
