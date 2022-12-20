---
sidebar_position: 1
---

# Pinning Service

The [p2wdb-pinning-service](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service) is an optional add-on that turns a local P2WDB into a node of an [IPFS pinning cluster](https://docs.ipfs.tech/how-to/work-with-pinning-services/#use-an-existing-pinning-service): computers running this software will pin files using their local IPFS node.

Files are typically pinned using the [`pin.cid()` function](https://github.com/Permissionless-Software-Foundation/p2wdb#pin-an-ipfs-cid) from the `p2wdb` JavaScript library, or by making a REST API call to a local P2WDB node. Pinning requests use the `p2wdb-pin-001` application ID.

Currently, files larger than 1MB will be rejected. This cap will likely be raised in the future if enough users request it in [the PSF Telegram channel](https://t.me/permissionless_software). The current price to pin up to 1MB is the same as the price of a write to the P2WDB, so a target of $0.01 USD in PSF tokens.

The pinning service is primarily used to store NFT images and metadata for tokens.

## Installation

Like the P2WDB, the production version of the p2wdb-pinning-service is expected to be run as a series of Docker containers, orchestrated with a [Docker Compose file](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service/blob/master/production/docker/docker-compose.yml). It will run these Docker Containers:

- **ipfs** - An instance of go-ipfs (kubo).
- **mongo** - An instance of the Mongo Database.
- **p2wdb** - An instance of the pay-to-write database (P2WDB).
- **pin-service** - The p2wdb-pinning-service application.
- **circuit-relay-v1** - A [V1 Circuit Relay](https://discuss.ipfs.tech/t/roadmap-for-circuit-relay-v2-file-transfer/14713). This is used to punch holes through firewalls for the purpose of file sharing. See this thread for more info.

It's important to note that when running the p2wdb-pinning-service, you run it as a standalone software because it *includes* the P2WDB. You should **not** run the Docker Containers in the [ipfs-p2wdb-servide](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) repository. All those files are already included int he p2wdb-pinning-service.

### Steps for Installing
The following steps assume the software is being installed on an Ubuntu Linux OS. [This gist](https://gist.github.com/christroutner/a39f656850dc022b60f25c9663dd1cdd) contains commands for installing Docker and Docker Compose.

1. Clone the repository:
  - `git clone https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service`

2. Navigate to the production/docker directory:
  - `cd p2wdb-pinning-service/production/docker`

3. Pull down the Docker images:
  - `docker-compose pull`

4. Bring up the Docker Containers:
  - `docker-compose up -d`

5. The output of each container can be monitored with the `docker logs` command. Example:
  - `docker logs --tail 20 -f ipfs`

Once the Docker Containers come up successfully, the P2WDB container should begin syncing with the other P2WDB instances on the internet. As entries come through with the `p2wdb-pin-001` application ID, the IPFS node will download and pin the content. After an hour or so, the machine will have localized copies of all content pinned by the pinning cluster.

## Configuration

The same [P2WDB configuration settings](/docs/software/config) can be applied here to the P2WDB. This section will focus on the configuration settings specific to the `pin-service` Docker Container and its [start-production.sh](https://github.com/Permissionless-Software-Foundation/p2wdb-pinning-service/blob/master/production/docker/pin-service/start-production.sh) shell script. The service is configured by setting the following environment variables:

- `export WEBHOOKSERVICE=http://172.17.0.1:5667/webhook`
- `export WEBHOOKTARGET=http://172.17.0.1:5010/p2wdb`

The `WEBHOOKSERVICE` is the URL for the Webhook REST API provided by the P2WDB container. The pin-service container will interact with that REST API to register a webhook at startup.

The `WEBHOOKTARGET` is the pin-service REST API that is called when the webhook is triggered. The webhook will be triggered whenever the local P2WDB instance adds an entry containing the `p2wdb-pin-001` application ID.

- `export P2WDB_SERVER_URL=http://172.17.0.1:5667`

When the pinning service is asked to [pin JSON data](https://github.com/Permissionless-Software-Foundation/p2wdb#pin-json-data), it will need to retrieve that JSON data from the P2WDB. This URL provides read-access to the P2WDB for that purpose.
