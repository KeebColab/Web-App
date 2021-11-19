<script context="module">
  export const prerender = true;
</script>

<script>
  // Gray 100 theme
  import "carbon-components-svelte/css/g80.css";
  import {
    Form,
    FormGroup,
    TextInput,
    Checkbox,
    RadioButtonGroup,
    RadioButton,
    Select,
    SelectItem,
    Button,
  } from "carbon-components-svelte";
  function handleSubmit(event) {
    // Prevent the default form submission
    // event.preventDefault();
    // console log the form data
    console.log(event.target.apiKey.value);
    console.log(event.target.owner.value);
    console.log(event.target.name.value);
    console.log(event.target.symbol.value);
    console.log(event.target.chain.value);
    console.log(event.target.updatable.value);
  }
</script>

<div>
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
        <!-- <SelectItem
          hidden
          value="placeholder"
          text="Choose a blockchain"
        /> -->
        <SelectItem value="polygon" text="Polygon" />
        <SelectItem value="rinkeby" text="Rinkeby Testnet" />
      </Select>
      <Select name="updatable" labelText="Updatable Metadata" value="polygon">
        <!-- <SelectItem
          hidden
          value="placeholder"
          text="Choose a blockchain"
        /> -->
        <SelectItem value="true" text="Yes, I want to have dynamic NFTs." />
        <SelectItem
          value="false"
          text="No, I want my Metadata frozen once minted."
        />
      </Select>
    </FormGroup>

    <Button type="submit">Submit</Button>
  </Form>
</div>

<!-- <section>
  <h1>
    <div class="welcome">
      <picture>
        <source srcset="svelte-welcome.webp" type="image/webp" />
        <img src="svelte-welcome.png" alt="Welcome" />
      </picture>
    </div>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</section> -->
<style>
  /* section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  } */
</style>
