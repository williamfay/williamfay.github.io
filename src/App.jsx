import './App.css';
import Nav from './Nav';
import Header from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
