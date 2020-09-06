<script>
  export let colors;
</script>

<style>
  .pallete {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .color {
    display: flex;
    align-items: center;
    margin: -3px -3px;
    padding: 3px;
    border: 1px solid transparent;
  }

  .color:hover {
    background-color: white;
    border-color: black;
    z-index: 1;
  }

  .color:hover > .label {
    width: initial;
  }

  .label {
    width: 0;
    line-height: 15px;
    overflow: hidden;
  }

  .square {
    width: 15px;
    height: 15px;
    border: 1px solid black;
    box-sizing: border-box;
  }
</style>

<div class="pallete">
  {#each colors as color}
    <div class="color">
      <div class="square" style="background-color: #{color.rgb}" title={color.name}></div>
      <div class="label">&nbsp;×&nbsp;{color.quantity}</div>
    </div>
  {/each}
</div>
