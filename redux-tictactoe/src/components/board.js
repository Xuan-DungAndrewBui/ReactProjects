import React from 'react';
import Square from "./square";

const Board = (props) => {

  let renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }
  return (
    <div>
      <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
    </div>
  )
} 

// class Board extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     renderSquare(i) {
//         return (
//           <Square
//             value={this.props.squares[i]}
//             onClick={() => this.props.onClick(i)}
//           />
//         );
//     }

//     render() {
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }

// const mapStateToProps = (state) => ({
//   squares: state.squares,
//   onClick: state.onClick
// })

// connect(mapStateToProps)(Board)

export default Board