<script lang="ts">
  export let row: number;
  export let col: number;

  import { gameState } from "../stores";

  $: active = row === $gameState.selfLoc.x && col === $gameState.selfLoc.y;

  let inBounds = true;
  // TODO: turn into loop
  if (
    row === 0 ||
    (row === 1 && (col <= 4 || col >= 16)) ||
    (row === 2 && (col <= 4 || col >= 17)) ||
    (row === 3 && (col <= 3 || col >= 17)) ||
    (row === 4 && (col <= 3 || col >= 18)) ||
    (row === 5 && (col <= 2 || col >= 18)) ||
    (row === 6 && (col <= 2 || col >= 19)) ||
    (row === 7 && (col <= 1 || col >= 19)) ||
    (row === 8 && (col <= 1 || col >= 20)) ||
    (row === 9 && (col <= 0 || col >= 20)) ||
    (row === 10 && (col <= 0 || col >= 21)) ||
    (row === 11 && (col <= 0 || col >= 20)) ||
    (row === 12 && (col <= 1 || col >= 20)) ||
    (row === 13 && (col <= 1 || col >= 19)) ||
    (row === 14 && (col <= 2 || col >= 19)) ||
    (row === 15 && (col <= 2 || col >= 18)) ||
    (row === 16 && (col <= 3 || col >= 18)) ||
    (row === 17 && (col <= 3 || col >= 17)) ||
    (row === 18 && (col <= 4 || col >= 17)) ||
    (row === 19 && (col <= 4 || col >= 16)) ||
    row === 20
  ) {
    inBounds = false;
  }
  const makeActive = () =>
    gameState.set({ ...$gameState, selfLoc: { x: row, y: col } });

  let hexStyle = "hexagon";
  $: if (inBounds) {
    hexStyle += " in-bounds";
  }
  $: if (active) {
    hexStyle += " active";
    console.log(hexStyle);
  } else {
    hexStyle = hexStyle.replace("active", "");
  }
</script>

<div class={hexStyle} on:click={makeActive}>
  <span>{row} , {col}</span>
</div>

<style>
  .hexagon {
    color: white;
    background-color: grey;
    /* border: 3px solid black; */
    width: var(--hex-size);
    margin: var(--hex-margin);
    height: calc(var(--hex-size) * 1.1547);
    display: inline-flex;
    font-size: calc(var(--hex-size)*.2);
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    align-items: center;
    justify-content: center;
  }
  .in-bounds {
    background-color: rgb(107, 92, 236);
  }
  .active {
    background-color: red;
  }
</style>
