<script>
  import Form from "./Form.svelte";
  import PartList from "./PartList.svelte";
  import { userToken } from "./stores/credentials";
</script>

<main>
  <Form />
  {#if $userToken}
    <PartList />
  {/if}
</main>
