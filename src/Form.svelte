<script>
  import {
    apiKey,
    username,
    password,
    userToken,
    persist as persistCredentials,
  } from "./stores/credentials";
  import { getUserToken } from "./rebrickable";

  let inProgress = false;
  let canAuthenticate, maskedKey, maskedToken;

  function authenticate() {
    inProgress = true;

    getUserToken($apiKey, $username, $password).then((newUserToken) => {
      userToken.set(newUserToken);
      persistCredentials();
    })
  }

  function reset() {
    userToken.set("");
    persistCredentials();
  }

  $: {
    canAuthenticate = $apiKey && $username && $password && !inProgress;
    if ($apiKey && $userToken) {
      maskedKey = $apiKey.replace(/(?<=.{6})./g, "*");
    }
  }
</script>

{#if $userToken}
  <span>API key: {maskedKey}</span>
  <button on:click={reset}>Reset user token</button>
{:else}
  <input bind:value={$apiKey} placeholder="API key" autocomplete="off" />
  <input bind:value={$username} placeholder="username" autocomplete="off" />
  <input bind:value={$password} placeholder="password" type="password" />

  <button
    on:click={authenticate}
    disabled={!canAuthenticate}>Authenticate</button>
{/if}
