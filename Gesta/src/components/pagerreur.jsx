import React from 'react'
import {Link} from 'react-router-dom'
import bg6 from "../assets/img/bg6.png"

const PageErreur = () =>{
    return (
        <div className="center">
            <img src={bg6} alt="/" className="bg6"/>
            <h1>Hey , cette page n'existe pas !</h1>
            <Link to ="/demande" className ="waves-effect waves-teal btn-flat"> Retourner à l'accueil</Link>
            </div>
    )
}
export default PageErreur 