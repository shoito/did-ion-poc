/**
 * This example shows how to resolve a DID using the ion-tools library.
 */
import { resolve } from '@decentralized-identity/ion-tools';
import { readFile, writeFile } from 'fs/promises';

const longFormDID = await readFile('./output/long-form-did');
const didDoc = await resolve(longFormDID);
await writeFile('./output/resolved.json', JSON.stringify(didDoc, null, 2));
console.log(JSON.stringify(didDoc, null, 2));
