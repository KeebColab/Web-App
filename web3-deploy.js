// This script will upload the contents of the `dist` folder to web3.storage, so you
// can view the application using an IPFS gateway.
// modified from https://github.com/web3-storage/example-image-gallery/blob/main/scripts/deploy.js

import dotenv from 'dotenv'
import { existsSync } from 'fs'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

dotenv.config()

function die(message) {
  console.error(message)
  process.exit(1)
}

async function deploy() {
  const { VITE_WEB3_STORAGE } = process.env
  if (!VITE_WEB3_STORAGE) {
    die('this script needs an env variable named VITE_WEB3_STORAGE containing API token for web3.storage')
  }

  if (!existsSync('./build')) {
    die('build folder not found. Try running this first: npm run build')
  }

  const web3Storage = new Web3Storage({ token: VITE_WEB3_STORAGE })
  console.log('Loading site files...')
  const files = await getFilesFromPath('./build')
  console.log(`Uploading ${files.length} files to Web3.Storage...`)
  const cid = await web3Storage.put(files, { wrapWithDirectory: false })
  console.log('Deployed to Web3.Storage!')
  console.log('Root cid: ', cid)
  console.log(`Gateway url: https://${cid}.ipfs.dweb.link`)
}

deploy()
  .catch(console.error)