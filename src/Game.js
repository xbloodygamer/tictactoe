import React from 'react';
import Board from "./Board";


class Game extends React.Component{

    constructor(props){
        super(props);
        this.state={
            history:[{squares:Array(9).fill(null)}],
            xIsNext:true,
            stepNumber: 0, //c'est le numero d'étape
        }
    }

    // fonction qui va permettre d'aller a l'étape du jeux souhaitée...c'est celle ci qui nous permet de voyager dans le temps au moment voulu
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0,
        });
    }

     
    handleClick(i){
               //history contient tous les tableaux d'etats passes
        //const history=this.state.history;
        const history=this.state.history.slice(0, this.state.stepNumber +1);
               // current contient l'etat actuel
        const current=history[history.length-1];

        const squares=current.squares.slice();

        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i]=this.state.xIsNext ? "X" : "O";
        this.setState({
            history:history.concat([{
                squares:squares,
            }]),
            stepNumber: history.length,
            xIsNext:!this.state.xIsNext,
        });

    }

    render(){
        //history contient tous les tableaux d'etats passes
        const history=this.state.history;
        // current contient l'etat actuel
        const current=history[this.state.stepNumber];
        const winner=calculateWinner(current.squares);

        //moves contient les different "coups" de chaque joueur.Move 1 = le coup numero 1 Move 2 = coup numero 2...etc. On va faire un mapping des differents coup avec les tableaux en fonction de l'avancement de (move1 sera mappé avec le tableau de l'etat 1...etc)
        const moves=history.map((step,move)=>{
            const desc=move?"Aller à l'étape #"+move:"Aller à la situation initiale";
            //desc contient la description à afficher à l'écran sur le bouton à enclencher pour voyager dans le temps. A chaque appui sur le bouton on demande l'etat de Board au numero de MOVE demandé
            return(
                <li key={move}>
                    <button onClick={ ()=> this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        
        let status;//declaration de la variable status
        if(winner){
            status="le gagnant est : "+winner;
        }else{
            status="prochain joueur: "+(this.state.xIsNext ? "X" : "O");
        }

        return(
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Game;