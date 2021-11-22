<script>
import {
	SvelteComponent,
	Form,
	append,
	attr,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data} from "svelte/internal";

let files;

for (const file of files) {
		console.log(`${file.name}: ${file.size} bytes`);
}

function SubmitHandler(e) {

const data = new FormData();
data.append("file", e.target.file);

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.nftport.xyz/v0/mints/customizable");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "");

xhr.send(data);
}

</script>

    <Form on:submit={SubmitHandler}>
      <label for="avatar">Upload a picture:</label>
      <input
        accept="image/png, image/jpeg"
        name="file"
        type="file"
        id="avatar"
      />

      <Button type="submit">Submit</Button>
    </Form>


{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes) </p>
	{/each}
{/if}

