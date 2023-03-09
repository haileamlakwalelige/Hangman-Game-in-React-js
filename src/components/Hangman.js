import React from 'react'
import './Hangman.css';
import {randomWord} from './Words.js';

import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

class Hangman extends React.Component{
    static defaultProps={
        maxWrong: 6,
        images : [step0, step1, step2, step3, step4, step5, step6]
    }
    constructor(props){
        super(props);
        this.state ={
            mistake:0,
            guessed:new Set([]),
            answer: randomWord()
        }
    }
    guessedWord(){
        return this.state.answer.split('').map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }
    handleGuess=(e)=>{
        let letter = e.target.value;
        this.setState(st =>(
            {
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
              } ));
    }

    generateButtons(){
        return 'abcdefghijklmnopqrstuvwyz'.split("").map(letter =>(
                <button  id='but'
                key={letter} value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
                >{letter.toUpperCase()}</button>
        ))
    }
    resetButton=()=>{
    this.setState({
        mistake:0,
        guessed:new Set([]),
        answer:randomWord()
    });
}
    render(){     
        const gameOver = this.state.mistake >= this.props.maxWrong;
        let gameState = this.generateButtons();
        const isWinner =this.guessedWord().join("") === this.state.answer;
        
        if(isWinner){
            gameState="You Won !"
        }
        if(gameOver){
            gameState="You Loss !"
        }
        return(
            <div div="hangman">
                <h1>Hangman</h1>
                <div className='guess'>Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                <div>
                    <img src={this.props.images[this.state.mistake]} alt="wrong images" />
                </div>
                <div> 
                <p>Guess the Programming Language : </p>
                <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                <p>{gameState} </p>
                <button className="btn" onClick={this.resetButton}>Reste</button>
                </div>
            </div>
        )
    }
}

export default Hangman;
