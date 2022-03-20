<script lang="ts">
  import HexTile from "./HexTile.svelte";

  let boardSize = {length:8};
</script>

<section id="hex-board">
  {#each boardSize as row, i}
    <div class={i % 2 === 0 ? "board-row" : "board-row odd"}>
      {#each {length: boardSize.length} as tile, j}
        <HexTile row={i} col={j} />
      {/each}
    </div>
  {/each}
</section>

<style>
  .board-row {
    margin: 0 0 calc(calc(var(--hex-size) / 3.5) * -1) 0;
  }
  .odd {
    position: relative;
    left: calc(var(--hex-size)/2);
    margin-left: 2px
}
  #hex-board {

  }
</style>
