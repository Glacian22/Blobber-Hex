<script lang="ts">
  export let execute;
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  let items = [
    { id: 1, name: "up-right" },
    { id: 3, name: "down-right" },
    { id: 6, name: "down-left" },
    { id: 5, name: "left" },
    { id: 4, name: "up-left" },
    { id: 7, name: "up-right" },
    { id: 8, name: "down-right" },
    { id: 2, name: "right" },
  ];
  const flipDurationMs = 300;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<div id="queue">
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as item (item.id)}
      <div animate:flip={{ duration: flipDurationMs }}>{item.name}</div>
    {/each}
  </section>
  <button on:click={execute(items)}>GO</button>
</div>

<style>
  #queue {
    border: 1px solid black;
    height: fit-content;
  }
</style>
