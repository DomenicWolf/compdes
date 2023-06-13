import React, { useState,useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    const chance = () => {
      let val = Math.floor(Math.random() * 100)
      return val > (chanceLightStartsOn * 100) ? false : true
    }
    let initialBoard = [];
    for(let y = 0; y < ncols; y++){
      let row = [];
      for(let x = 0; x < nrows; x++){
        row.push(chance())
      }
      initialBoard.push(row)
    }
    // TODO: create array-of-arrays of true/false values
    
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    let test = [];
    for(let i = 0; i < board.length; i++) {
      
      test.push(board[i].every(j => j === false))
    }
    
    let test2 = test.every(t => t === true)
    if (test2 === true){
      alert('YOU HAVE WON SOMEHOW!')
     
      return false
    }
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row]);

      // TODO: Make a (deep) copy of the oldBoard
      flipCell(y,x,boardCopy)
      flipCell(y,x-1,boardCopy)
      flipCell(y,x+1,boardCopy)
      flipCell(y-1,x,boardCopy)
      flipCell(y+1,x,boardCopy)
      // TODO: in the copy, flip this cell and the cells around it
      return boardCopy
      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO
 
  return (
   <div>
    
    <h1>GAME</h1>
    {hasWon() ? '' : 
    <table>
      <tbody>
        {board.map((row,idx) => (
        <tr key={idx}>{row.map((cell,idxx) => (
          <Cell flipCellsAroundMe={flipCellsAround} isLit={cell} id={[idx,idxx]}></Cell>
        ))}
        </tr>
        ))}
      </tbody>
       
    </table>
   }
   </div>
  )
  // make table board

  // TODO
}

export default Board;
