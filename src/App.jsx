import './index.css';
import { Outlet } from 'react-router'
import Navbar from './Components/Common/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
