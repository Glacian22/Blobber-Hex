<script lang="ts">
  import HexBoard from "./components/HexBoard.svelte";
  import Queue from "./components/Queue.svelte";
  import { gameState } from "./stores";
  import "./global.css";

  const execute = async (actions) => {
    for (let i = 0; i < actions.length; i++) {
      switch (actions[i].name) {
        case "up-right":
          gameState.set({
            ...$gameState,
            selfLoc: {
              x: $gameState.selfLoc.x - 1,
              y:
                $gameState.selfLoc.x % 2 === 0
                  ? $gameState.selfLoc.y
                  : $gameState.selfLoc.y + 1,
            },
          });
          break;
        case "right":
          gameState.set({
            ...$gameState,
            selfLoc: { ...$gameState.selfLoc, y: $gameState.selfLoc.y + 1 },
          });
          break;
        case "down-right":
          gameState.set({
            ...$gameState,
            selfLoc: {
              x: $gameState.selfLoc.x + 1,
              y:
                $gameState.selfLoc.x % 2 === 0
                  ? $gameState.selfLoc.y
                  : $gameState.selfLoc.y + 1,
            },
          });
          break;
        case "up-left":
          gameState.set({
            ...$gameState,
            selfLoc: {
              x: $gameState.selfLoc.x - 1,
              y:
                $gameState.selfLoc.x % 2 === 0
                  ? $gameState.selfLoc.y - 1
                  : $gameState.selfLoc.y,
            },
          });
          break;
        case "left":
          gameState.set({
            ...$gameState,
            selfLoc: { ...$gameState.selfLoc, y: $gameState.selfLoc.y - 1 },
          });
          break;
        case "down-left":
          gameState.set({
            ...$gameState,
            selfLoc: {
              x: $gameState.selfLoc.x + 1,
              y:
                $gameState.selfLoc.x % 2 === 0
                  ? $gameState.selfLoc.y - 1
                  : $gameState.selfLoc.y,
            },
          });
          break;
        default:
          console.log("invalid command");
      }
      const delay = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("delay before next action");
          resolve("ok");
        }, 1000);
      });

      const actionResult = await delay;
      console.log(actionResult);
    }
  };
</script>

<main>
  <HexBoard />
  <Queue {execute} />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    /* max-width: 2000px */
  }
</style>
