import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component{

    //attributs


    //methodes
    render(){
        const def="grise";
        const voit={color:"grise",brand:"Peugot",owner:"none",id:"wzasz"};
        // on ouvre les parentheses pour injecter de l'html via l'annotation JSX-JavaScript Xml ET on execute la logique du code dans les {}
        // c'est ici que l'on defini le contenu html affichable à l'appel de la balise <Garage /> dans l'index.js
        return(
            <div>
                <h1>Quelles sont les voiture que j'ai dans mon garage ?</h1>
                <Voiture color="vert" brand="Mustang" owner="Sylvain" id="nzx87" /><br/>
                <Voiture color="rouge"brand="Merco" owner="Jean-Kevin" id="nzx88" /><br/>
                <Voiture color="bleu"brand="BMW" owner="Jean" id="nzx78" /><br/> 
                <Voiture color="jaune"brand="Audi" owner="Strauss" id="nzx68" /><br/>

                
                <Voiture color={voit.color}brand={voit.brand} owner={voit.owner} id={voit.id} /><br/>
            </div>
        );
    }


}

export default Garage;