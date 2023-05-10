import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Connexion from './components/connexion/Connexion'
import Inscription from './components/inscription/Inscription'
import Recuperationdmp from './components/recuperationdeMP/Recuperationdmp'
import Pagedrecuperationdmdp from './components/Pagedrecuperationdmdp/Pagedrecuperationdmdp'
import Acceuil from './components/Acceuil/Acceuil'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Connexion />} />
        <Route path="Acceuil" element={<Acceuil />} />
        <Route path="Pagedrecuperationdmdp" element={<Pagedrecuperationdmdp />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Recuperationdmp" element={<Recuperationdmp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
