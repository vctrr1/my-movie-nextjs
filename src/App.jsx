import NavBar from '../src/components/navBar/NavBar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App
