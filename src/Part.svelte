<script>
  import Pallete from './Pallete.svelte'

  export let imageUrl, quantity, name, colors;
</script>

<style>
  .part {
    position: relative;
    width: 120px;
    height: 120px;
    padding: 10px;
    margin: 10px;
  }

  .quantity {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>

<div class="part">
  <img
    src={imageUrl}
    alt={name}
    title={name}
    loading="lazy"
    referrerpolicy="no-referrer" />
  <Pallete colors={colors}/>
  <div class="quantity">&nbsp;×&nbsp;{quantity}</div>
</div>
