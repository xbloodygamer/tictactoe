import React from "react";

class Clock extends React.Component{
    // 1ere fonction qui s'execute pour crée le composent-->c'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }
    // la fonction qui affiche l'HTML sur l'ecran. To render=Afficher en anglais
    render(){
        return(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }

    // une fois que l'affichage (render) a lieu la fonction suivante s'execute directement
    // componentDidMount=le composant vienr de se mettre en place
    componentDidMount(){
        this.timerID=setInterval(()=>this.tictac() ,1000);
    }

    // voici une fonction qui permet de mettre a jour la date dans l'etat (this.state.date)
    // ATT: qui dit mise a jour de l'etat dit: setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
}

//juste avant de finir un life cycle et de quitter le composent, nous effaçons le contenu de l'intervalle du temps



export default Clock;