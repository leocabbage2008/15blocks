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
    
    try { up = Blocks[row - 1][col]; }
    catch { up = -1; }
    
    try { down = Blocks[row + 1][col]; }
    catch { down = -1; }
    
    try { left = Blocks[row][col - 1]; }
    catch { left = -1; }

    try { right = Blocks[row][col + 1]; }
    catch { right = -1; }
    
    console.log([up, down, left, right]);

    if (up === null) {
      const dupBlocks1 = Blocks;
      [dupBlocks1[row][col], dupBlocks1[row-1][col]] = [dupBlocks1[row-1][col], dupBlocks1[row][col]];
      setBlocks([...dupBlocks1]);
    }
    else if (down === null) {
      const dupBlocks2 = Blocks;
      [dupBlocks2[row][col], dupBlocks2[row + 1][col]] = [dupBlocks2[row + 1][col], dupBlocks2[row][col]];
      setBlocks([...dupBlocks2]);
    }
    else if (left === null) {
      const dupBlocks3 = Blocks;
      [dupBlocks3[row][col], dupBlocks3[row][col - 1]] = [dupBlocks3[row][col - 1], dupBlocks3[row][col]];
      setBlocks([...dupBlocks3]);
    }
    else if (right === null) {
      const dupBlocks4 = Blocks;
      [dupBlocks4[row][col], dupBlocks4[row][col + 1]] = [dupBlocks4[row][col + 1], dupBlocks4[row][col]];
      setBlocks([...dupBlocks4])
    }
    else {
      alert("You can't move this block")
    }

  }
  return (
    <div className="App">
      <Grid content={Blocks.flat()} clickHandle={clickHandler} />
    </div>
  );
}

export default App;
