import React from 'react';
import Board from '../components/board';
import { connect } from 'react-redux';
import {clickSquare, timeTravel} from '../actions/actions';

const mapStateToProps = state => {
    return {
        history: state.history,
        xNext: state.xNext,
        stepNumber: state.stepNumber,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickSquare: (history, squares, xNext) => dispatch(clickSquare(history, squares, xNext)),
        timeTravel: (step) => dispatch(timeTravel(step))
    };
}

class Game extends React.Component {

    calculateWinner(squares) {
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

    handleClick(i) {
        const history = this.props.history.slice(0, this.props.stepNumber + 1); //need state
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const xNext = this.props.xNext;

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.props.xNext ? 'X' : 'O'; //need state
        this.props.clickSquare(history, squares, xNext);    //ACTION
    }

    jumpTo(step) {
        this.props.timeTravel(step); //ACTION
    }

    render() {
    const history = this.props.history; //need state
    const current = history[this.props.stepNumber]; //need state
    const winner = this.calculateWinner(current.squares);

    const moves = this.props.history.map((step, move) => {
      const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xNext ? 'X' : 'O');
        }

        return(
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

