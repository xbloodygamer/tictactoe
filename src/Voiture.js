import React from 'react';

 
class Voiture extends React.Component{
    // attributs

    //methodes
constructor(){
    super();
    this.state={color:"red"};

}
    render(){
        return <h2>coucou, je suis la voiture {this.props.brand} de couleur {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}
export default Voiture;