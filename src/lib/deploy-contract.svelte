<script>
  import {
    Form,
    FormGroup,
    TextInput,
    Select,
    SelectItem,
    Button,
  } from "carbon-components-svelte";
  function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();
    // console log the form data
    console.log(event.target.apiKey.value);
    console.log(event.target.owner.value);
    console.log(event.target.name.value);
    console.log(event.target.symbol.value);
    console.log(event.target.chain.value);
    console.log(event.target.updatable.value);

    const data = JSON.stringify({
      chain: event.target.chain.value,
      name: event.target.name.value,
      symbol: event.target.symbol.value,
      owner_address: event.target.owner.value,
      metadata_updatable: event.target.updatable.value,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://api.nftport.xyz/v0/contracts");
    xhr.withCredentials = false;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", event.target.apiKey.value);

    xhr.send(data);
  }
</script>

<deployContract>
  <Form on:submit={handleSubmit}>
    <TextInput
      name="apiKey"
      labelText="NFTPort API Key"
      placeholder="Enter api key..."
    />
    <TextInput
      name="owner"
      labelText="Your Ethereum Address"
      placeholder="0x..."
    />
    <TextInput
      name="name"
      labelText="Name your Contract"
      placeholder="Enter story name..."
    />
    <TextInput name="symbol" labelText="Symbol" placeholder="Enter symbol..." />
    <FormGroup>
      <Select name="chain" labelText="Select a blockchain" value="polygon">
        <SelectItem value="polygon" text="Polygon" />
        <SelectItem value="rinkeby" text="Rinkeby Testnet" />
      </Select>
      <Select name="updatable" labelText="Updatable Metadata" value="polygon">
        <SelectItem value="true" text="Yes, I want to have dynamic NFTs." />
        <SelectItem
          value="false"
          text="No, I want my Metadata frozen once minted."
        />
      </Select>
    </FormGroup>

    <Button type="submit">Submit</Button>
  </Form>
</deployContract>
