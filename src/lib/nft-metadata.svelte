<script>
  let Form;
  function handleSubmit(event) {
    // Prevent the default form submission
    // event.preventDefault();
    // console log the form data
    console.log(event.target.apiKey.value);
    console.log(event.target.name.value);
    console.log(event.target.description.value);
    console.log(event.target.file_url.value);
    const data = JSON.stringify({
      name: event.target.name.value,
      description: event.target.symbol.value,
      file_url: event.target.owner.value,
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

<metadata>
  <Form on:submit={handleSubmit}>
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

    <Button type="submit">Submit</Button>
  </Form>
</metadata>
