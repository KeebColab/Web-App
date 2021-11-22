<script>
  import { createEventDispatcher } from "svelte";
  import { Web3Storage } from "web3.storage";
  import {
    FileUploaderButton,
    FormGroup,
    TextInput,
  } from "carbon-components-svelte";

  const dispatch = createEventDispatcher();

  function makeStorageClient() {
    const token = document.querySelector('input[name="web3StorageToken"]');
    console.log(token.value);
    return new Web3Storage({
      token: token.value,
    });
  }

  async function getFiles(event) {
    var files = await event.target.files;
    var file = files[0];
    console.log(file.name);
    const fileInput = document.querySelector('input[type="file"]');
    console.log(fileInput.files);
    const cid = storeFiles(fileInput.files);
    console.log(cid);
  }

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    dispatch("message", {
      text: cid,
    });
    console.log("stored files with cid:", cid);
    return cid;
  }

  // async function storeWithProgress(files) {
  //   // show the root cid as soon as it's ready
  //   const onRootCidReady = (cid) => {
  //     console.log("uploading files with cid:", cid);
  //   };

  //   // when each chunk is stored, update the percentage complete and display
  //   const totalSize = files.map((f) => f.size).reduce((a, b) => a + b, 0);
  //   let uploaded = 0;

  //   const onStoredChunk = (size) => {
  //     uploaded += size;
  //     const pct = totalSize / uploaded;
  //     console.log(`Uploading... ${pct.toFixed(2)}% complete`);
  //   };

  //   // makeStorageClient returns an authorized Web3.Storage client instance
  //   const client = makeStorageClient();

  //   // client.put will invoke our callbacks during the upload
  //   // and return the root cid when the upload completes
  //   return client.put(files, { onRootCidReady, onStoredChunk });
  // }
</script>

<web3Storage>
  <FormGroup>
    <TextInput
      name="web3StorageToken"
      labelText="Web3.Storage Token"
      placeholder="Enter your token..."
      type="password"
    />
    <FileUploaderButton labelText="Add files" on:change={getFiles} />
  </FormGroup>
</web3Storage>
