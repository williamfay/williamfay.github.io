import './styles/module.App.css';
import Nav from './components/Nav';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import backgroundImg from './assets/Icon-Grid.svg';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(${backgroundImg})'}}>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
