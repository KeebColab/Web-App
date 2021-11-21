<script>
  import "carbon-components-svelte/css/g80.css";
  import { Form, FormGroup, TextInput, Button } from "carbon-components-svelte";
  import Web3Storage from "$lib/web3storage.svelte";

  function handleMessage(event) {
    alert(event.detail.text);
  }

  function handleIt(event) {
    event.preventDefault();

    const data = JSON.stringify({
      name: event.target.name.value,
      description: event.target.description.value,
      file_url: event.target.file.value,
    });
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", "https://api.nftport.xyz/v0/metadata");
    xhr.withCredentials = false;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", event.target.apiKey.value);
    xhr.send(data);
  }
</script>

<nftMetadata>
  <Form on:submit={handleIt}>
    <FormGroup>
      <TextInput
        name="apiKey"
        labelText="NFTPort API Key"
        placeholder="Enter api key..."
      />
      <TextInput
        name="name"
        labelText="Name your Contract"
        placeholder="Enter story name..."
      />
      <TextInput
        name="description"
        labelText="description"
        placeholder="description"
      />
      <TextInput name="file_url" labelText="file_url" placeholder="file_url" />
    </FormGroup>
    <Web3Storage on:message={handleMessage} />
    <Button type="submit">Submit</Button>
  </Form>
</nftMetadata>
