<script>
  import { apiKey, userToken } from "./stores/credentials";
  import { parts, sortedParts, loadingProgress } from "./stores/parts";
  import Part from "./Part.svelte";
  import { getAllParts } from "./rebrickable";

  function onProgress(count, total) {
    loadingProgress.set(Math.round((count / total) * 100));
  }

  function loadParts() {
    loadingProgress.set(0);
    getAllParts($apiKey, $userToken, onProgress).then((result) => {
      parts.set(result);
      loadingProgress.set(null);
    });
  }

  let uniqueParts, totalParts

  $: if ($sortedParts) {
    uniqueParts = $sortedParts.length
    totalParts = $sortedParts.reduce((sum, {quantity}) => sum + quantity, 0)
  }
</script>

<style>
  .parts {
    display: flex;
    flex-wrap: wrap;
  }
</style>

{#if $sortedParts}
  <p>{uniqueParts} kinds, {totalParts} total</p>
  <div class="parts">
    {#each $sortedParts as { colors, part, quantity } (part.part_num)}
      <Part name={part.name} imageUrl={part.part_img_url} {quantity} {colors} />
    {/each}
  </div>
{:else}
  <button on:click={loadParts}>
    Load parts {#if $loadingProgress}({$loadingProgress}%){/if}
  </button>
{/if}
