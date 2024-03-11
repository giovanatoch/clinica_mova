import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Carrosel from './components/Carrosel/Carrosel';
import Psicologas from './components/Psicologas/Psicologas'
import Address from './components/Address/Address';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Carrosel/>
      <Psicologas/>
      <Address/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App;
