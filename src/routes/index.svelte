<!-- <script context="module">
  export const prerender = true;
</script> -->
<script>
  import DeployContract from "$lib/deploy-contract.svelte";
  import NftMetadata from "$lib/nft-metadata.svelte";
  import { Tab, Tabs, TabContent } from "carbon-components-svelte";
</script>

<Tabs autoWidth>
  <Tab label="Deploy Contract" />
  <Tab label="Define Metadata" />
  <Tab label="Mint NFT" />
  <div slot="content">
    <TabContent><DeployContract /></TabContent>
    <TabContent><NftMetadata /></TabContent>
    <TabContent />
  </div>
</Tabs>
