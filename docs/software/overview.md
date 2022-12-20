---
sidebar_position: 1
---

# Overview
The P2WDB ecosystem is composed of different software categories:

- P2WDB Instances
- User Libraries
- Add-Ons

## P2WDB Instances
An 'instance' or 'full node' of the P2WDB will download each entry in the P2WDB from other instances on the network. It will independently verify each entry before accepting it into its local database.

- [ipfs-p2wdb-service](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) is an instance for the BCH blockchain.
- [ecash-p2wdb-service](#) is an instance for the eCash blockchain.

## User Libraries
User libraries allow front end and back end apps to interact with the P2WDB. The specific instance of the P2WDB the library talks to is configured at run time. The library can be used to speak to a local instance of the P2WDB, or to talk to any instance of the P2WDB on the internet.

- [p2wdb](https://www.npmjs.com/package/p2wdb) is a JavaScript library for node.js and browsers. It allows easy reading from and writing to the P2WDB.
- [psf-js-examples](#) contains code examples for using the p2wdb library in your own application.


## Add-Ons
- Native Payments - This is an optional add-on that is built into each instance of the P2WDB. It simply needs to be turned on through [configuration settings](/docs/software/config). When enabled, the P2WDB maintains its own wallet. The wallet is stocked with PSF tokens. This add-on allows users to pay for writes in the native cryptocurrency (BCH or XEC), without needing to posses PSF tokens. The P2WDB instance will provide the User with an address and a fee. Once paid, the P2WDB will burn its own stash of PSF to pay for the P2WDB write fee. A service fee is added to the user. The service fee defaults to 10%, but can be reduced or increased by the P2WDB operator.

## Apps
A series of applications have been built on top of the P2WDB. These apps leverage the webhook capability of the P2WDB, in order to respond to new data being written to the P2WDB.

- [p2wdb-pinning-service](/docs/apps/pinning-service) is an app that turns the P2WDB instance and its IPFS node into a file pinning service. This allows users to pin IPFS content across multiple IPFS nodes, making it more widely available. Pinning content improves the user experience, and makes the content more difficult to censor.

- [PSF DEX](https://dex.fullstack.cash) is a decentralized exchange (DEX) for trading tokens. Different instances of the DEX use the P2WDB to coordinate and stay in sync. New Offers and Counter Offers written to the P2WDB trigger the DEX software to respond, which keep trades flowing.
