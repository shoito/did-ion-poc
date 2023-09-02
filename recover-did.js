/**
 * This script recovers a DID from a previous state file and generates an update operation to add a new key and service.
 */
import { anchor, DID, generateKeyPair } from '@decentralized-identity/ion-tools';
import { readFile, writeFile } from 'fs/promises';

// Generate new keys
let authnKeys3 = await generateKeyPair();

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

let recoverOperation = await did.generateOperation('recover', {
  removePublicKeys: ['key-2'],
  addPublicKeys: [
    {
      id: 'key-3',
      type: 'EcdsaSecp256k1VerificationKey2019',
      publicKeyJwk: authnKeys3.publicJwk,
      purposes: [ 'authentication' ]
    }
  ],
  removeServices: ['some-service-2'],
  addServices: [
    {
      'id': 'some-service-3',
      'type': 'SomeServiceType',
      'serviceEndpoint': 'http://www.example.com'
    }
  ]
});

await writeFile('./output/recovered.json', JSON.stringify({ ops: recoverOperation }, null, 2));
console.log(JSON.stringify({ ops: recoverOperation }, null, 2));
