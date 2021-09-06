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
    <main>
        <button type="button">Cargar más tarjetas</button>
        <section className="card-container">
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
               
            </article>
        </section>
    </main>
<Footer/>
    </div>

  );
}

export default App;
