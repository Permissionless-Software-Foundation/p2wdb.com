---
sidebar_position: 3
---

# Configuration

[ipfs-p2wdb-service](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) has several configuration settings set in its [start-production.sh](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/blob/master/production/docker/start-production.sh) startup script. This page describes the different configuration settings.

*Note:* Environment variables can also be set in the `docker-compose.yml` file.

## Blockchain Infrastructure

As new entries are written to an instance of P2WDB, that entry is passed through the IPFS network to all other instances of the P2WDB. Each instance of the P2WDB must connect to its underlying blockchain to independently validate the entry matches consensus rules. P2WDB uses the [Cash Stack](https://cashstack.info) to connect to its underlying blockchain infrastructure. There is both a web2 and a web3 implementation of the Cash Stack.

### Web3
By default, the P2WDB uses the web3 Cash Stack. These are free, public servers maintained by members of the [PSF](https://psfoundation.cash). The server is chosen by setting the **CONSUMER_URL** to the URL of an instance of [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer), like this:

- `export CONSUMER_URL=https://free-bch.fullstack.cash/`

Here are lists of free, public web3 Cash Stack servers maintained by the PSF community:
- [BCH web3 Cash Stack servers](https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6)
- [XEC web3 Cash Stack servers](https://gist.github.com/christroutner/621bb9d64e2642b9f0d30e67c33a9d6c)


### Web2
If a user has access to a local web2 Cash Stack, or to [private infrastructure hosted by FullStack.cash](https://fullstack.cash/pricing), they can configure P2WDB to use that infrastructure. This often results in faster and more reliable performance, which is highly desirable when using the P2WDB in a business application.

To configure the use of a web2 Cash Stack, the following environment variables should be set:

- `export USE_FULLSTACKCASH=1`

#### Self Hosted Infrastructure
You can run your own local instance of the web2 Cash Stack. [Video instructions](https://psfoundation.cash/video/) are provided for setting up each subcomponent of the Cash Stack. To connect the P2WDB to your local infrastructure, set the following environment variables:

- `export APISERVER=<REST API url for your infra>`

This configuration setting assumes that you are running [bch-api](https://github.com/Permissionless-Software-Foundation/bch-api) with rate-limits turned off.

#### FullStack Account
If using a [FullStack.cash Tiered Account](https://fullstack.cash/pricing), the following environment variables should be set:

- `export GET_JWT_AT_STARTUP=1`
- `export FULLSTACKLOGIN=<your login email>`
- `export FULLSTACKPASS=<your fullstack.cash password>`

With those environment variables set, the P2WDB will log into FullStack.cash at startup and will retrieve a JWT token to access the BCH REST API. It will automatically renew the JWT token to ensure it can maintain access to the BCH blockchain infrastructure.

#### FullStack Private Infrastructure
If using [private, isolated infrastructure hosted by FullStack.cash](https://fullstack.cash/pricing), the following environment variables should be set:

- `export APISERVER=<REST API url provided by FullStack.cash>`
- `export FULLSTACK_AUTH_PASS=<Authentication password provided by FullStack.cash>`

## Ports
The ports used by the P2WDB are configurable. It's desirable to change the default ports on computer systems that run many Docker containers, in order to avoid port conflicts.

The default ports are the following:
- 5667 - P2WDB REST API
- 5666 - MongoDB
- 5001 - IPFS Control API (Used for the P2WDB to control the IPFS node)

The ports can be changed by setting the following environment variables. These are presented in the same order as the defaults above.

- `export PORT=5667`
- `export MONGO_PORT=5666`
- `export IPFS_API_PORT=5001`

Note: These settings will not change the ports in the `docker-compose.yml` file. Those will need to be changed separately.

## Native Payments
Writing to the P2WDB must be done by burning a quanity of [PSF Tokens](https://slp-token.fullstack.cash/?tokenid=38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0). However, *native payments* is an optional add-on for the P2WDB. When enabled, it allows the P2WDB instance to maintain its own wallet containing PSF tokens. This allows users to pay in the native currency (BCH or XEC) and reduces the friction of users having to aquire PSF tokens. To enable native payments, set the following configuration environment variables:

- `export ENABLE_BCH_PAYMENT=1`

In order for this setting to function properly, the P2WDB must have access to a wallet file that contains both PSF tokens and the native currency, otherwise the P2WDB will throw errors when users attempt to write to it.
