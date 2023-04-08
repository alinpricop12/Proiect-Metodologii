import { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Formular from './Components/Formular';
import Cerere from './Components/Cerere';

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/formular" element={<Formular />} />
        <Route path="/cerere" element={<Cerere />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
