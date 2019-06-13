import React from "react";


// lorsque j'appuie sur le bouton Toggle il y a un lie du commentaire. Sinon c'est un dislike.
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={like:false};
        // Nous allons lier la fonction handleclick avec le this pour ne pas avoir à le repeter sans cesse. Bind=lier
        this.handleClick=this.handleClick.bind(this);
    }

handleClick(){
    this.setState(state=>({like: !state.like}));
}

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.like ? "like :)" : "Dislike :("}
            </button>
        );
    }

}

export default Toggle;