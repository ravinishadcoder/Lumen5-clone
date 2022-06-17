import './App.css';
import { Navbar } from '../src/components/navbar/Navbar';
import { Footer } from '../src/components/footer/Footer';
import { Routes, Route} from 'react-router-dom'
import Login from './context/Login';
import CaseStudies from "../src/Pages/CaseStudies";
import {Resources} from "../src/Pages/Resources";
import Home from "../src/Pages/Home";
import Blog from "../src/Pages/Blog";
function App() {
  return (
    <div className="App">
{/* uncomment Navbar and Footer to see changes */}
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path='login' element={<Login/>} /> */}  
      <Route path="case-studies" element={<CaseStudies/>}/>
    <Route path="resources" element={<Resources/>}/>
    <Route path="blog" element={<Blog/>}/>
     </Routes>

     
     <Footer/>
    </div>
  );
}

export default App;
