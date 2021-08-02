import Grid from "./components/Grid";
import blocks from "./defaults/block/index.js";
import "./App.css";
import React from "react";

function App() {
  const [Blocks, setBlocks]=React.useState(blocks);
  function clickHandler(v) {
    const row = Math.floor(v / 4);
    const col = v % 4;
    let up, down, left, right;
    
    try { up = Blocks[row - 1][col]; } catch {}
    
    try { down = Blocks[row + 1][col]; } catch {}
    
    try { left = Blocks[row][col - 1]; } catch {}

    try { right = Blocks[row][col + 1]} catch {}

    const dupBlocks = Blocks;
    if (up === null) {
      [dupBlocks[row][col], dupBlocks[row - 1][col]] = [dupBlocks[row - 1][col], dupBlocks[row][col]];
      setBlocks([...dupBlocks]);
    }
    else if (down === null) {
      [dupBlocks[row][col], dupBlocks[row + 1][col]] = [dupBlocks[row + 1][col], dupBlocks[row][col]];
      setBlocks([...dupBlocks]);
    }
    else if (left === null) {
      [dupBlocks[row][col], dupBlocks[row][col - 1]] = [dupBlocks[row][col - 1], dupBlocks[row][col]];
      setBlocks([...dupBlocks]);
    }
    else if (right === null) {
      [dupBlocks[row][col], dupBlocks[row][col + 1]] = [dupBlocks[row][col + 1], dupBlocks[row][col]];
      setBlocks([...dupBlocks]);
    }
    else alert("You can't move this block");
  }
  return (
    <div className="App">
      <Grid content={Blocks.flat()} clickHandle={clickHandler} />
    </div>
  );
}
export default App;