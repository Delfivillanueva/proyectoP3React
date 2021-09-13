import React from 'react';

function Header(){
    return(
        <header>
        <h1>Recomendaciones de peliculas.</h1>
        <section>
           
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    </header>
)}
    

export default Header