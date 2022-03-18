<script lang="ts">
  export let tileID: number;
</script>

<div class="hexagon">
  <span>{tileID}</span>
</div>

<style>
  .hexagon {
    color: white;
    background-color: grey;
    width: var(--hex-size);
    margin: 4px;
    height: calc(var(--hex-size) * 1.1547);
    display: inline-flex;
    font-size: initial; /* we reset the font-size if we want to add some content */
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    /* clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%); */
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    align-items: center;
    justify-content: center;
  }
</style>
