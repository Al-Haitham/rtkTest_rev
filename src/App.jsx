import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProduitsList/>} />
        <Route path='/produits/form/new' element={<ProduitForm/>} />
        <Route path='/produits/form/:id/edit' element={<ProduitsList/>} />
        <Route path='/panier' element={<Panier/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;