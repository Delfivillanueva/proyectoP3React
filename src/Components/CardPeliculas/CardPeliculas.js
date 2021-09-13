import React, {Component} from 'react';
import './CardPeliculas.css';


class CardPeliculas extends Component{

    constructor(props){
        super(props)
        this.state = {
            detalle: false,
            texto:'Ver más',
            
            
        }
    }

    detalle(){
        if(this.state.detalle){
            this.setState({
                detalle: false,
                texto: 'Ver más'
            })
        } else {
            this.setState({
                detalle: true,
                texto: 'ver menos'
            })            
        }
    }

    render(){
        return(
            <div className= 'peli-card'>

                    <img className='img' alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.dataPelicula.backdrop_path}`} alt=""/>
                    <h3>{this.props.dataPelicula.original_title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <p className={`extra ${this.state.detalle ? 'show' : 'hide'}`}>Fecha de estreno : {this.props.dataPelicula.release_date}</p>
                    <p className={`extra ${this.state.detalle ? 'show' : 'hide'}`}>Popularidad : {this.props.dataPelicula.popularity}</p>
                    <p className={`extra ${this.state.detalle ? 'show' : 'hide'}`}>Puntaje : {this.props.dataPelicula.vote_average}</p>
                <p className='more' onClick={()=>this.detalle()}>{this.state.texto}</p>
                <button className = 'btnBorrar' onClick = { () => this.props.borrar(this.props.dataPelicula.id)} >Borrar</button>

                
                    

            </div>

        );
    }
}
export default CardPeliculas