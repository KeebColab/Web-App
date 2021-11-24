<script>
  export let chain, metadata_uri, contract_address, nftport_token;
  import { FormGroup, TextInput, Button } from "carbon-components-svelte";

  function handleEvent(event) {
    event.preventDefault();

    const data = JSON.stringify({
      chain: chain,
      contract_address: contract_address,
      metadata_uri: metadata_uri,
      mint_to_address: event.target.ownerAddress.value,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://api.nftport.xyz/v0/mints/customizable");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", nftport_token);

    xhr.send(data);
  }
</script>

<mint>
  <FormGroup on:submit={handleEvent}>
    <TextInput
      name="ownerAddress"
      labelText="NFT Owner Address"
      placeholder="Enter the address..."
    />
    <Button type="submit">Mint Token</Button>
  </FormGroup>
</mint>
