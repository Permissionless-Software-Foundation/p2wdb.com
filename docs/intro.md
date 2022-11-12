---
sidebar_position: 2
---

# Introduction

The Pay-to-Write Database (P2WDB) is an **censorship-resistant database**. It's similar to a blockchain, but better optimized for data. The code base is maintained by the [Permissionless Software Foundation](https://psfoundation.info). There are currently two separate versions of the P2WDB, one operating on the Bitcoin Cash (BCH) blockchain, and one operating on the eCash (XEC) blockchain.

P2WDB is similar to blockchain in these ways:
- The database has many redundant copies spread across the globe. They sync with one another using consensus rules. This makes the database very difficult to censor, and a great place to store public data that may be subject to censorship.
- A token is used to pay for writes, the [PSF token](https://psfoundation.cash). The cost is approximately $0.01 USD per write.

Unlike a blockchain, the database is optimized for storing data:
- Each entry can store up to 10 KB of data.
- Data is guaranteed to be available for one year. After that, it slowly falls off the network. Data can be re-uploaded with another write, which will guarentee its existence for another year.

The P2WDB is built on top of the [Cash Stack](https://cashstack.info). The community of developers can be contacted on [this Telegram channel](https://t.me/bch_js_toolkit). If you have technical questions or need help, the Telegram channel is the place to go.

## Basics
The code that makes up the P2WDB is open source and licensed under a [GPL v2](#) license. Like a Bitcoin node, or an IPFS node, anyone can download and run the [P2WDB node software](#) to operate their own local copy of the P2WDB. Also, anyone is free to fork the software and make any changes they like. A local node will download and independently verify each entry in the P2WDB, just like a Bitcoin node will independently verify each entry in the blockchain. Like a Bitcoin node, the P2WDB will synchronize with other nodes through consensus rules.

The [PSF](https://psfoundation.cash) created and maintains a 'reference' implementation of the P2WDB. Reading from the database is free, but writing to the database requires a proof-of-burn.

## Proof-of-Burn
The cost of writing to the P2WDB is set by the [PSF Minting Council](#), and is paid in [PSF tokens](https://psfoundation.cash). The Minting Council periodically adjusts the P2WDB write cost to try and target a cost of $0.01 USD per write.

Proof-of-burn is simply a transaction ID (TXID) on the blockchain, which provides proof that a sufficient number of PSF tokens were burned to satisfy the cost of a write. Each instance of the P2WDB will independently validate the proof-of-burn for each entry in the database.

Instances of the P2WDB can turn on an optional feature, which will burn PSF tokens on behalf of the user. This allows the user to pay for a write in the native currency (BCH or XEC), without needing to possess PSF tokens. The P2WDB instance will burn its own stash of PSF on behalf of the user. The operator of the P2WDB instance will usually charge a fee of 1-10% for this service.