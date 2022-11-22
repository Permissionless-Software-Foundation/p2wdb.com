---
sidebar_position: 1
---

# Get Started
For JavaScript developers who want to get started quickly, this page has links to code examples that can be used to read from or write to the Pay-to-Write Database (P2WDB).

The code examples on this page link to interactive [CodeSandbox](https://codesandbox.io) examples. The code in these examples can also be downloaded from the [psf-js-examples](#) repository too.

## Reading from the P2WDB
Reading from the P2WDB is free. There are multiple ways to read data from the P2WDB, depending on your use case.

### Get a Page of Entries
A 'page' of entries is defined as 20 entries. The `getPage()` function returns a page of the most recent entries. For example, the first page is the latest 20 entries. The second page will return the latest entries, starting with the 21st through the 40th latest entry.

```javascript
const { Read } = require("p2wdb");

async function start() {
  // Get the first page of results from the P2WDB
  const read = new Read();
  const result = await read.getPage();

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```

- [CodeSandbox Example](https://codesandbox.io/s/sharp-cerf-8ko66n?file=/src/index.js)
- The same results can be seen visually in the [P2WDB Explorer](https://explorer.fullstack.cash/)


### Filter by App ID
A page of entries can also be filtered by the `appId`. An App ID is an optional field that can be included during a write. These app IDs allow different applications to write data to the P2WDB, without impacting one another.

```javascript
const { Read } = require("p2wdb");

async function start() {
  const read = new Read();

  // Get the latest page of entries for the BCH DEX
  const appId = "bch-dex-001";
  const result = await read.getByAppId(appId, 0);

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```

- [CodeSandbox Example](https://codesandbox.io/s/modest-driscoll-cnrnb2?file=/src/index.js)

### Get Entry by CID
A single entry withing the P2WDB can be retrieved by its Content IDentifier ([CID](https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid)). The P2WDB is built on top of [OrbitDB](https://github.com/orbitdb/orbit-db), which is in term built on top of [IPFS](https://ipfs.io), which pioneered the concept of a CID. CIDs for OrbitDB start with the letter 'z'.

```javascript
const { Read } = require("p2wdb");

async function start() {
  const read = new Read();

  // Get a single entry from its CID
  const hash = "zdpuAxKmsCYVXiyzDHTzVyFKSnfokc2owUtk3rZ6Fjsau3Cjd";
  const result = await read.getByHash(hash);

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```

- [CodeSandbox Example](https://codesandbox.io/s/practical-dawn-l81bop?file=/src/index.js:186-337)

### Get Entry by TXID

An alternative way to retrieve a single entry is with the transaction ID (TXID) on the blockchain that was used as a proof-of-burn. These TXIDs provide a unique way to identify each entry, just like the CID.


```javascript
const { Read } = require("p2wdb");

async function start() {
  const read = new Read();

  // Get a single entry from its CID
  const txid = "f9a012ee4095588d2dc28de733d3261c504a7b171988c759caa889128d6a05b3";
  const result = await read.getByTxid(txid);

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```

- [CodeSandbox Example](https://codesandbox.io/s/empty-violet-65m9l1?file=/src/index.js:204-376)


## Writing to the P2WDB
Up to 10KB of arbitrary data can be written to the P2WDB per entry, and the most common format uses JSON. In the example below, only BCH is needed in order to write to the database.

```javascript
const { Write } = require("p2wdb");
const BchWallet = require("minimal-slp-wallet");

// Replace this private key and public address with your own.
const wif = "L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m";
// BCH Address: bitcoincash:qqkg30ryje97al52htqwvveha538y7gttywut3cdqv
// SLP Address: simpleledger:qqkg30ryje97al52htqwvveha538y7gttyz8q2dd7j

async function start() {
  // Instantiate the BCH wallet using a private key.
  const bchWallet = new BchWallet(wif, { interface: "consumer-api" });
  await bchWallet.initialize();

  const write = new Write({ bchWallet });

  // Generate the data that will be written to the P2WDB.
  const appId = "test";
  const data = {
    now: new Date(),
    data: "This is some test data."
  };

  // Write the data to the P2WDB
  const result = await write.postEntry(data, appId);

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```

- [CodeSandbox Example](https://codesandbox.io/s/vibrant-darwin-q34rkp?file=/src/index.js)


Note: PSF tokens are required to write to the P2WDB. By using BCH, you are essentially paying the P2WDB instance to burn it's own supply of PSF tokens on your behalf. In exchange for this service, the P2WDB instance will charge 10% extra on top of the spot-price of PSF tokens. Users can avoid the 10% surcharge by holding PSF tokens in the address paying for the write, or by finding another instance on the network that charges lower fees.

### eCash Write
This example is the same as above, but shows how to write to the P2WDB instance on the eCash blockchain:

```javascript
const { Write } = require("p2wdb");
const BchWallet = require("minimal-slp-wallet");

// Replace this private key and public address with your own.
const wif = "L1tcvcqa5PztqqDH4ZEcUmHA9aSHhTau5E2Zwp1xEK5CrKBrjP3m";
// BCH Address: ecash:qqkg30ryje97al52htqwvveha538y7gttyh3l6rhxm

async function start() {
  // Instantiate the BCH wallet on the eCash chain
  const bchWallet = new BchWallet(wif, {
    interface: "consumer-api",

    // eCash web3 Cash Stack
    restURL: 'https://xec-consumer-or1-usa.fullstackcash.nl'
  });
  await bchWallet.initialize();

  const write = new Write({ bchWallet });

  // Generate the data that will be written to the P2WDB.
  const appId = "test";
  const data = {
    now: new Date(),
    data: "This is some test data."
  };

  // Write the data to the P2WDB
  const result = await write.postEntry(data, appId);

  // Display results in the console
  console.log(JSON.stringify(result, null, 2));
}
start();
```
