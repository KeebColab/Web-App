<!-- <script context="module">
  export const prerender = true;
</script> -->
<script>
  import DeployContract from "$lib/deploy-contract.svelte";
  import Web3storage from "$lib/web3storage.svelte";
  import NftMetadata from "$lib/nft-metadata.svelte";
  import Mint from "$lib/mint.svelte";
  import { Tab, Tabs, TabContent } from "carbon-components-svelte";
</script>

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
