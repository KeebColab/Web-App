<script>
  // import dotenv from "dotenv";
  import { Web3Storage } from "web3.storage";

  // dotenv.config();

  // TODO: get user's api key
  function makeStorageClient() {
    return new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEViNjY1YjZhRjI2OThhYmI3M2Q3RWVFNmY4ZEIyMzdBNjZDMTA5MDUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzcyNzUwMDA4MDEsIm5hbWUiOiJORlRQb3J0LTEifQ.fU-hJ-3yUh3X8waEYLL2vrghR9Y8iAvyngduhFI4tOc",
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
  function makeFileObjects() {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: "world" };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

    const files = [
      new File(["contents-of-file-1"], "plain-utf8.txt"),
      new File([blob], "hello.json"),
    ];
    return files;
  }
  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
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

/* ask the user to choose a file */
<input on:change={getFiles} type="file" />
