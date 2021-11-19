<script context="module">
  export const prerender = true;
</script>

<script>
  // Gray 100 theme
  import "carbon-components-svelte/css/g80.css";
  import {
    Form,
    FormGroup,
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
    <FormGroup legendText="Checkboxes">
      <Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
      <Checkbox id="checkbox-1" labelText="Checkbox Label" />
      <Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
    </FormGroup>
    <FormGroup legendText="Radio buttons">
      <RadioButtonGroup name="radio-button-group" selected="default-selected">
        <RadioButton
          id="radio-1"
          value="standard"
          labelText="Standard Radio Button"
        />
        <RadioButton
          id="radio-2"
          value="default-selected"
          labelText="Default Selected Radio Button"
        />
        <RadioButton
          id="radio-4"
          value="disabled"
          labelText="Disabled Radio Button"
          disabled
        />
      </RadioButtonGroup>
    </FormGroup>
    <FormGroup>
      <Select id="select-1" labelText="Select menu" value="placeholder-item">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
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
