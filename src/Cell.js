import React from "react";
import "./Cell.css";

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit, id}) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  const coords = `${id[0]}-${id[1]}`
  return <td key={id} id={coords}className={classes} onClick={() => flipCellsAroundMe(coords)} />;
}

export default Cell;
