import './index.css';
import { Outlet } from 'react-router'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer';

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
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
