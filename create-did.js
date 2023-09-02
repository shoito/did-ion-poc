/**
 * This script creates a DID using the ion-tools library.
 * 
 * Reference: https://github.com/decentralized-identity/ion-tools?tab=readme-ov-file#create-ion-did
 */
import { anchor, DID, generateKeyPair } from '@decentralized-identity/ion-tools';
import { writeFile } from 'fs/promises';

// Generate keys and ION DID
let authnKeys = await generateKeyPair();
await writeFile('./output/sign.keys', JSON.stringify(authnKeys, null, 2));

let did = new DID({
  content: {
    publicKeys: [
      {
        id: 'key-1',
        type: 'EcdsaSecp256k1VerificationKey2019',
        publicKeyJwk: authnKeys.publicJwk,
        purposes: [ 'authentication' ]
      }
    ],
    services: [
      {
        id: 'domain-1',
        type: 'LinkedDomains',
        serviceEndpoint: 'https://foo.example.com'
      }
    ]
  }
});

// Generate and publish create request to an ION node
let createRequest = await did.generateRequest(0);

// Commented out due to Get challenge service not available error
// let anchorResponse = await anchor(createRequest);

// Store the key material and source data of all operations that have been created for the DID
let ionOps = await did.getAllOperations();
await writeFile('./output/ion-did-ops-v1.json', JSON.stringify({ ops: ionOps }, null, 2));

await writeFile('./output/long-form-did', await did.getURI());
console.log(`Long-form DID: ${await did.getURI()}`);

await writeFile('./output/short-form-did', await did.getURI(true));
console.log(`Short-form DID: ${await did.getURI(true)}`);
