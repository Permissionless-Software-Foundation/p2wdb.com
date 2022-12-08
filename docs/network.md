---
sidebar_position: 5
---

# Network
This page lists the various network URLs that provide resources for interacting with the P2WDB.

## Explorer.FullStack.cash

[Explorer.FullStack.cash](https://explorer.fullstack.cash) is akin to a 'block explorer' used for blockchains. Instead of viewing blocks and transactions, the P2WDB Explorer allows users to explorer entries in the database.

## P2WDB.FullStack.cash
[P2WDB.FullStack.cash](https://p2wdb.fullstack.cash) provides the REST API documentation for interacting with the P2WDB REST API. This is also the same URL used to interact with the REST API directly.

## P2WDB-Pin.FullStack.cash
[P2WDB-Pin.FullStack.cash](https://p2wdb-pin.fullstack.cash) is a REST API port to access the [P2WDB Pinning Service](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service). This is used by the [p2wdb npm library](https://www.npmjs.com/package/p2wdb) or the [psf-bch-wallet command line wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) to pin IPFS content and to upload raw JSON data to IPFS.

## P2WDB-Gateway-678.FullStack.cash
This is an IPFS Gateway for accessing content pinned by the P2WDB pinning service. This URL is an efficient way for retrieving content pinned by the [P2WDB Pinning Service](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service). Here is an example:

- https://p2wdb-gateway-678.fullstack.cash/ipfs/bafybeicvlcwv3flrwa4egmroyicvghevi6uzbd56drmoerjeguu4ikpnhe/psf-logo.png

## P2WDB-CR.FullStack.cash
This is a [v1 Circuit Relay](https://blog.aira.life/understanding-ipfs-circuit-relay-ccc7d2a39). This provides a convenient way to punch through firewalls and share files between IPFS peers. You can connect your IPFS node to this circuit relay using one of these connection commands:

- `ipfs swarm connect /dns4/p2wdb-cr.fullstack.cash/tcp/443/wss/ipfs/12D3KooWKNuBjaMgEDN2tGqzmdfM2bmd22VEuboC4X7x8ua4DvUg`
- `ipfs swarm connect /ip4/5.161.108.190/tcp/4102/p2p/12D3KooWKNuBjaMgEDN2tGqzmdfM2bmd22VEuboC4X7x8ua4DvUg`

Using a Circuit Relay, you can connect to other IPFS peers that your node may not be able to reach, so long as they are both connected to the same Circuit Relay. Here is an example of connecting to another node through the above Circuit Relay:

- `ipfs swarm connect /ip4/5.161.108.190/tcp/4102/p2p/12D3KooWKNuBjaMgEDN2tGqzmdfM2bmd22VEuboC4X7x8ua4DvUg/p2p-circuit/p2p/12D3KooWMbpo92kSGwWiN6QH7fvstMWiLZKcxmReq3Hhbpya2bq4`

### P2WDB-CR-WSS.FullStack.cash

A secure websocket port is also available for js-ipfs web browser based clients. Here is the connection information:

- `ipfs swarm connect /dns4/p2wdb-cr-wss.fullstack.cash/tcp/443/wss/ipfs/12D3KooWKNuBjaMgEDN2tGqzmdfM2bmd22VEuboC4X7x8ua4DvUg`
- `ipfs swarm connect /ip4/5.161.108.190/tcp/4103/p2p/12D3KooWKNuBjaMgEDN2tGqzmdfM2bmd22VEuboC4X7x8ua4DvUg`
