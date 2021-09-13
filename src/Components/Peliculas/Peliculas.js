import React, {Component} from 'react';
import CardPeliculas from '../CardPeliculas/CardPeliculas';
import Filter from '../Filter/Filter';
import './Container.css'

class Peliculas extends Component{
constructor(){
    super();
    this.state = {
        peliculas: [],
        peliculasIniciales: [],
        pagActual: 1,
        cargando: true,
    }
}
componentDidMount(){
    this.masPeliculas()
}

borrarTarjeta(id){
    let peliculasQuedan = this.state.peliculas.filter(pelicula =>{
        return pelicula.id != id
    })
    this.setState({
        peliculas : peliculasQuedan, peliculasIniciales: peliculasQuedan
    })
}

filtrarPeliculas(textoAFiltrar) {
    let peliculasFiltradas = this.state.peliculasIniciales.filter(pelicula => {
        
        return pelicula.original_title.toLowerCase().includes(textoAFiltrar.toLowerCase())
    })

    this.setState({
        peliculas: peliculasFiltradas,
    })
}
//metodo para ver mas tarjetas
masPeliculas(){
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=' + this.state.pagActual;
    console.log("NOS TRAE LA PAG" + url)
    fetch(url)
    .then(respuesta => {
      return respuesta.json()
  })  
  .then((data) => {
      this.setState({
          peliculas: this.state.peliculas.concat(data.results.slice(0,10)),
          peliculasIniciales: this.state.peliculasIniciales.concat(data.results.slice(0,10)),
          pagActual: this.state.pagActual + 1,
          cargando: false,
      })
  })
  }

render(){
    return(
        <React.Fragment>
            <div>
                <Filter filtrarPeliculas = {(texto) => this.filtrarPeliculas(texto)} />
                </div>
            <div className= "row card-container">
               
              {
                  this.state.cargando ? 
                  <p>Cargando...</p> : 
                  
                  this.state.peliculas.length === 0 ?
                  <p>No hay resultados para tu busqueda </p> :
                  this.state.peliculas.map((pelicula,index)=>{
                     return  <CardPeliculas dataPelicula= {pelicula} key = {pelicula.original_title + index}
                     borrar = {(idEliminar) => this.borrarTarjeta(idEliminar) }/>
                 
                  })
              }
            </div> 
            <button onClick= {()=> this.masPeliculas()}>Más Peliculas</button>
        </React.Fragment>
    );
}
}

export default Peliculas