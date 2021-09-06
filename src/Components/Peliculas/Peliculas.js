import React, {Component} from 'react';
import CardPeliculas from '../CardPeliculas/CardPeliculas';

class Peliculas extends Component{
constructor(){
    super();
    this.state = {
        peliculas: [],
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
render(){
    return(
<React.Fragment>
{
                this.state.peliculas.map((pelicula,index)=>{
                   return  <CardPeliculas dataPelicula= {pelicula} key = {pelicula.original_title + index}/>
               
                })
              }  
</React.Fragment>
    );
}
}

export default Peliculas