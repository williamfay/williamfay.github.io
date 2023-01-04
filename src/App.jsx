import './App.css';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
