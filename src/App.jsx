import './App.css'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';


AOS.init(); // Initialize AOS library

function App() {

  return (
    <BrowserRouter>
      <div className='bg-dark'>
        <Header></Header>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/signup'  element={<Signup/>}/>
          <Route path='/signin'  element={<Signin/>}/>
        </Routes>
      </div>
    </BrowserRouter>
 
  )
}

export default App
