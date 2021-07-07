import { getInput, setFailed } from '@actions/core';
import deploy from './deploy';

async function run() {
  try {
    const folder = getInput('folder');
    const bucket = getInput('bucket');
    const distId = getInput('dist-id');
    const invalidation = getInput('invalidation');
    const cacheControl = getInput('cacheControl');

    await deploy(folder, bucket, distId, invalidation, cacheControl);
  }
  catch (error) {
    setFailed(error.message);
  }
}

run()
