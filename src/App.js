import logo from './logo.svg';
import './App.css';

import Peliculas from './Components/Peliculas/Peliculas';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
<Header/>
  <Peliculas/>
    
<Footer/>
    </div>

  );
}

export default App;
