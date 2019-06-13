import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Garage from './Garage';
import Game from './Game';
import Tick from './tick';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Liste from "./Liste";



function tick2(){
    const element=(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
        </div>
    );

   ReactDOM.render(element,document.getElementById("popo2"));
}

setInterval(tick2,1000);

ReactDOM.render(<LoginControl />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('popo2'));
ReactDOM.render(<Toggle />, document.getElementById('popo'));

const numbers=[4,9,3,8,2]; 
ReactDOM.render(<Liste numbers={numbers} />, document.getElementById('popo4'));




const messages=["coucou j'espere que tu passe une bonne journee", "Re ca va", "Bye je pars"];
ReactDOM.render(<Mailbox messagesnonlus={messages} />, document.getElementById('popo3'));

//ReactDOM.render(<Garage />, document.getElementById('popo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
