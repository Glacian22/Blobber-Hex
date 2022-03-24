<script lang="ts">
  import HexBoard from "./components/HexBoard.svelte";
  import Queue from './components/Queue.svelte';
  import {gameState} from './stores';
  import "./global.css";

  const execute = (actions) => {
    actions.forEach(a => {
      switch (a.name) {
        case "up-right":
          
          break;
      }
    })
  }
</script>

<main>
  <HexBoard />
  <Queue {execute}/>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    /* max-width: 2000px */
  }
</style>
