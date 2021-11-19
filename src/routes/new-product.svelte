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
</script>

<div>
  <Form on:submit>
    <TextInput labelText="NFTPort API Key" placeholder="Enter api key..." />
    <TextInput labelText="Your Ethereum Address" placeholder="0x..." />
    <TextInput labelText="Name your Story" placeholder="Enter story name..." />
    <TextInput labelText="Symbol" placeholder="Enter symbol..." />
    <FormGroup>
      <Select id="select-1" labelText="Select a blockchain" value="polygon">
        <!-- <SelectItem
          hidden
          value="placeholder"
          text="Choose a blockchain"
        /> -->
        <SelectItem value="polygon" text="Polygon" />
        <SelectItem value="rinkeby" text="Rinkeby Testnet" />
      </Select>
    </FormGroup>
    <FormGroup legendText="Updatable Metadata">
      <RadioButtonGroup name="updatable-button-group" selected="updatable-yes">
        <RadioButton
          id="radio-1"
          value="updatable-yes"
          labelText="Yes, I want to have dynamic NFTs."
        />
        <RadioButton
          id="radio-2"
          value="updatable-no"
          labelText="No, I want my Metadata frozen once minted."
        />
      </RadioButtonGroup>
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
