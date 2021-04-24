import logo from './logo.svg';
import './App.css';
import SayHello from './components/SayHello';

function App() {
  return (
    <div className="App">
      <h2>React Testing Library</h2>
      <SayHello name="React" />
    </div>
  );
}

export default App;
