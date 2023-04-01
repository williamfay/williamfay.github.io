import './styles/module.App.css';
import Nav from './components/Nav';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import FadeIn from './components/fade-in';

function App() {
  return (
    <>
    <FadeIn>
    <div className="App">
      <Header />
      <Nav />
      <Outlet />
    </div>
    </FadeIn>
    </>
  );
}

export default App;
