/**
 * This example demonstrates how to update a DID Document using ion-tools.
 */
import { anchor, DID, generateKeyPair } from '@decentralized-identity/ion-tools';
import { readFile, writeFile } from 'fs/promises';

// Generate new keys
let authnKeys2 = await generateKeyPair();

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

// Generate update operation to add key-2 and add some-service-2.
let updateOperation = await did.generateOperation('update', {
  addPublicKeys: [
    {
      id: 'key-2',
      type: 'EcdsaSecp256k1VerificationKey2019',
      publicKeyJwk: authnKeys2.publicJwk,
      purposes: [ 'authentication' ]
    }
  ],
  addServices: [
    {
      'id': 'some-service-2',
      'type': 'SomeServiceType',
      'serviceEndpoint': 'http://www.example.com'
    }
  ]
});

// Generate and publish update request to an ION node
let updateRequest = await did.generateRequest(updateOperation);
// let anchorRespons = await anchor(updateRequest);

// Store the revised key material and source data for the DID
ionOps = await did.getAllOperations();
await writeFile('./output/ion-did-ops-v2.json', JSON.stringify({ ops: ionOps }, null, 2));
console.log(JSON.stringify({ ops: ionOps }, null, 2));
