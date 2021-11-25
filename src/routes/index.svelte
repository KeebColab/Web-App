<!-- <script context="module">
  export const prerender = true;
</script> -->
<script>
  import { dataFeed } from "$lib/stores";
  import DeployContract from "$lib/deploy-contract.svelte";
  import Web3storage from "$lib/web3storage.svelte";
  import NftMetadata from "$lib/nft-metadata.svelte";
  import Mint from "$lib/mint.svelte";
  import { Tab, Tabs, TabContent, Tile } from "carbon-components-svelte";
  import { each } from "svelte/internal";

  // make a list of keys and values from an object
  function makeList(obj) {
    var list = [];
    for (var key in obj) {
      list.push([key, obj[key]]);
    }
    return list;
  }
</script>

<div>
  <Tabs autoWidth>
    <Tab label="Deploy Contract" />
    <Tab label="Upload Files" />
    <Tab label="Define Metadata" />
    <Tab label="Mint NFT" />
    <div slot="content">
      <TabContent><DeployContract /></TabContent>
      <TabContent><Web3storage /></TabContent>
      <TabContent><NftMetadata /></TabContent>
      <TabContent><Mint /></TabContent>
    </div>
  </Tabs>
  <!-- <Tile>
    <h4>Data Feed</h4>
  </Tile> -->
  <div>
    {#if $dataFeed}
      {#each $dataFeed as response, i}
        <Tile>
          <div><h4>{i}</h4></div>
          {#each makeList(response) as [key, value]}
            <div>
              {key}: {value}
            </div>
          {/each}
        </Tile>
      {/each}
    {/if}
  </div>
</div>
