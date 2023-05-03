import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Connexion from './components/connexion/Connexion'
import Inscription from './components/inscription/Inscription'
import Recuperationdmp from './components/recuperationdeMP/Recuperationdmp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Connexion />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Recuperationdmp" element={<Recuperationdmp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
