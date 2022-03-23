<script lang="ts">
  import HexTile from "./HexTile.svelte";
  import { gameState } from "../stores";

  let boardSize = {length: $gameState.boardSize};
</script>

<section id="hex-board">
  {#each boardSize as row, i}
    <div class={i % 2 === 0 ? "board-row" : "board-row odd"}>
      {#each {length: boardSize.length + 1} as tile, j}
        <HexTile row={i} col={j}/>
      {/each}
    </div>
  {/each}
</section>

<style>
  #hex-board {
    max-width: calc(var(--hex-size)*35);
    position: relative;
    right: calc(var(--hex-size) * .25)
  }
  .board-row {
    margin: 0 0 calc(calc(var(--hex-size) / 3.5) * -1) 0;
  }
  .odd {
    position: relative;
    left: calc(var(--hex-size)/2);
    margin-left: var(--hex-margin)
}
</style>


  