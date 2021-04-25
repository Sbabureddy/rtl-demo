import logo from './logo.svg';
import './App.css';
import SayHello from './components/SayHello';
import Counter from './components/Counter';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <h2>React Testing Library</h2>
      <SayHello name="React" />
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
