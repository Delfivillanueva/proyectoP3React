import React, {Component} from 'react';
import CardPeliculas from '../CardPeliculas/CardPeliculas';
import Filter from '../Filter/Filter';

class Peliculas extends Component{
constructor(){
    super();
    this.state = {
        peliculas: [],
        peliculasIniciales: [],
        
    }
}
componentDidMount(){
    console.log("Se cargo el componente");
    let url = 'https://api.themoviedb.org/3/movie/popular?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1';

    fetch(url)
        .then(respuesta => {
            return respuesta.json()
        })    
        .then((data) => {
            console.log(data);
            this.setState({
               peliculas: data.results,
            })
        })
        .catch(error => console.log(error))
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
        peliculas: peliculasFiltradas
    })
}

render(){
    return(
        <React.Fragment>
            <div>
                <Filter filtrarPeliculas = {(texto) => this.filtrarPeliculas(texto)} />
                </div>
                {
                this.state.peliculas.map((pelicula,index)=>{
                   return  <CardPeliculas dataPelicula= {pelicula} key = {pelicula.original_title + index}
                   borrar = {(idEliminar) => this.borrarTarjeta(idEliminar) }/>
               
                })
              }  
        </React.Fragment>
    );
}
}

export default Peliculas