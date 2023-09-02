/**
 * This script deactivates a DID using ion-tools.
 */
import { DID } from '@decentralized-identity/ion-tools';
import { readFile, writeFile } from 'fs/promises';

// Instantiate DID using previously saved state
let ionOps;
await readFile('./output/ion-did-ops-v1.json')
  .then((data) => {
    ionOps = JSON.parse(data);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
let did = new DID(ionOps);

let deactivateOperation = await did.generateOperation('deactivate');
await writeFile('./output/deactivate.json', JSON.stringify(deactivateOperation, null, 2));
console.log(JSON.stringify(deactivateOperation, null, 2));
