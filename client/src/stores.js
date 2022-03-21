import { writable } from 'svelte/store';

export const gameState = writable(
  {
    selfLoc: {x:0, y:0}
  }
);