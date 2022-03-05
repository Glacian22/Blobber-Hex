<script lang="ts">
  export let tileID: number;
</script>

<div class="hexagon">
  {tileID}
</div>

<style>
  .hexagon {
    background-color: grey;
    width: 100px;
    margin: 4px;
    height: calc(100px * 1.1547);
    display: inline-block;
    font-size: initial; /* we reset the font-size if we want to add some content */
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  }
</style>
