import './App.css';
import { Navbar } from '../src/components/navbar/Navbar';
import { Footer } from '../src/components/footer/Footer';
import { Routes, Route} from 'react-router-dom'
import { Login } from './context/login/Login';
import { Create } from './context/login/Create';
import { Home } from './Pages/Home';
import  CaseStudies  from './Pages/CaseStudies';
import  Enterprise  from '../src/Pages/Enterprise';



import  Pricing  from './Pages/pricing/Pricing';

// import pricing form 
// import  Enterprise  from './Pages/Enterprise';
// import  Pricing  from './Pages/pricing/Pricing';


import {Resources} from "../src/Pages/Resources";
import Blog from "../src/Pages/Blog";
import Upgrade from './Pages/pricing/Upgrade';
function App() {
  return (
    <div className="App">
{/* uncomment Navbar and Footer to see changes */}
     <Navbar/>  
 
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='pricing' element={<Pricing/>} />
      <Route path="pricing/upgrade" element={<Upgrade/>}/>
      <Route path='enterprise' element={<Enterprise/>} />
      <Route path='casestudies' element={<CaseStudies/>} />      
      <Route path='create/login' element={<Login/>} />   
      <Route path='create' element={<Create/>}/>  
      <Route path="resources" element={<Resources/>}/>
      <Route path="blog" element={<Blog/>}/>

     </Routes>

     
     <Footer/>
    </div>
  );
}

export default App;
