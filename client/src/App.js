import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Fib from './Fib';
import Other from './Other';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/other">Other Page</Link>
        </header>
        <div>
          <Routes>
            <Route exact path="/" Component={Fib} />
            <Route path="/other" Component={Other} />            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
