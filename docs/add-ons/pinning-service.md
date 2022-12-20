---
sidebar_position: 1
---

# Pinning Service

The [p2wdb-pinning-service](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service) is an optional add-on that turns a local P2WDB into a node of an [IPFS pinning cluster](https://docs.ipfs.tech/how-to/work-with-pinning-services/#use-an-existing-pinning-service): computers running this software will pin files using their local IPFS node.

Files are typically pinned using the [`pin.cid()` function](https://github.com/Permissionless-Software-Foundation/p2wdb#pin-an-ipfs-cid) from the `p2wdb` JavaScript library, or by making a REST API call to a local P2WDB node. Pinning requests use the `p2wdb-pin-001` application ID.

Currently, files larger than 1MB will be rejected. This cap will likely be raised in the future if users request it in [the PSF Telegram channel](https://t.me/permissionless_software). The current price to pin up to 1MB is the same as the price of a write to the P2WDB, so a target of $0.01 USD in PSF tokens.

The pinning service is primarily used to store NFT images and metadata for tokens.

## Installation

Like the P2WDB, the production version of the p2wdb-pinning-service is expected to be run as a series of Docker container, orchestrated with a [Docker Compose file](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service/blob/master/production/docker/docker-compose.yml). It will run these Docker Containers:

- **ipfs** - An instance of go-ipfs (kubo).
- **mongo** - An instance of the Mongo Database.
- **p2wdb** - An instance of the pay-to-write database (P2WDB).
- **pin-service** - The p2wdb-pinning-service application.
- **circuit-relay-v1** - A [V1 Circuit Relay](https://discuss.ipfs.tech/t/roadmap-for-circuit-relay-v2-file-transfer/14713). This is used to punch holes through firewalls for the purpose of file sharing. See this thread for more info.

It's important to note that when running the p2wdb-pinning-service, you run it as a standalone software because it *includes* the P2WDB. You should **not** run the Docker Containers in the [ipfs-p2wdb-servide](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) repository. All those files are already included int he p2wdb-pinning-service.

## Configuration

This section will describe the configuration settings.
