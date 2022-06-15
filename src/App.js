import './App.css';
import Navbar from './general/navbar/Navbar';
import { Footer } from './general/footer/Footer';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
{/* uncomment Navbar and Footer to see changes */}
     <Navbar/>

     <Routes>
      {/* <Route path='login' element={<Login/>} /> */}     
     </Routes>


     
     <Footer/>
    </div>
  );
}

export default App;
