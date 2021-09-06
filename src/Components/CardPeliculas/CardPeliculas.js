import React, {Component} from 'react';

class CardPeliculas extends Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
<div>
<img alt='20' src={`https://image.tmdb.org/t/p/w500/${this.props.dataPelicula.backdrop_path}`} alt=""/>
                    <h3>{this.props.dataPelicula.original_title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
   

</div>

        );
    }
}
export default CardPeliculas