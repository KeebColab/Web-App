<script>
  const data = JSON.stringify({
    chain: "polygon",
    contract_address: "0xC8D297D7b496f86673551c933815B47973FC4a0e",
    metadata_uri: "ipfs://QmTz7dGHvXghNuh3V64QBwHPXva4chpMR7frpfxCaxvhd4",
    mint_to_address: "0x5FDd0881Ef284D6fBB2Ed97b01cb13d707f91e42",
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
  xhr.setRequestHeader(
    "Authorization",
    "asdflksdfl0-12312398234-sdklvndslf-3333333"
  );

  xhr.send(data);
</script>
