import React, {Component} from 'react';

class Filter extends Component{
    constructor(props){
        super(props)
        this.state = {
            filtrarPor : ''

        }
    }

    evitarEnviar(evento){
        evento.preventDefault()
    }

    controlarCambios(evento){
        this.setState({
            filtrarPor : evento.target.value
        }, ()=>  this.props.filtrarPeliculas (this.state.filtrarPor))

    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit = {(e) => this.evitarEnviar(e)}>
                    <label for ='nombre'> Pelicula a Filtrar : </label>
                    <input type = 'text' name = 'nombre' id ='nombre' onChange =
                     {(e) => this.controlarCambios(e) } value = {this.state.filtrarPor} />
                </form>

            </React.Fragment>
        )
    }
}

export default Filter;