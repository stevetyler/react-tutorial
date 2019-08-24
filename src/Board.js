import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  /*
    Notice how with onClick={() => alert('click')},
    we’re passing a function as the onClick prop.
    React will only call this function after a click.
    Forgetting () => and writing onClick={alert('click')} is a common mistake, and would fire the alert every time the component re-renders.
  */
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => { this.props.onClick(i) }}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board
