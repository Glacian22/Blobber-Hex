<script lang="ts">
  import HexTile from "./HexTile.svelte";

  const board = [[0,1,2], [3,4,5,6], [7,8,9,10,11], [12,13,14,15], [16,17,18]];
  let count = 0;
</script>

<section id="hex-board">
  {#each board as row, i}
    <div class="board-row">
      {#each row as tile, j}
        <HexTile tileID={tile} />
      {/each}
    </div>
  {/each}
</section>

<style>
  .board-row {
    width: fit-content;
    margin: 0 0 calc(calc(var(--hex-size) / 3.5) * -1) 0
  }
  #hex-board {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
</style>