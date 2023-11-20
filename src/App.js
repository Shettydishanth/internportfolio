import {Routes,Route,BrowserRouter} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Navbar">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path ='/' element ={<Home/>} />
    <Route path ='/about' element={<About/>} />
    <Route path ='/skills' element={<Skills/>}/>
    <Route path ='/project' element={<Project/>}/>
    <Route path ='/contact' element={<Contact/>}/>
    <Route path ='/footer' element={<Footer/>}/>

    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
