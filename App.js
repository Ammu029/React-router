import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path="*" element={<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
