---
sidebar_position: 2
---

# Installation
The production version of the P2WDB is expected to be run as a series of Docker containers, orchestrated with a [Docker Compose file](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/blob/master/production/docker/docker-compose.yml). It will run these Docker Containers:

- **ipfs** - An instance of go-ipfs (kubo).
- **p2wdb-mongo** - An instance of the Mongo Database.
- **p2wdb** - An instance of the pay-to-write database (P2WDB).

### Steps for Installing
The following steps assume the software is being installed on an Ubuntu Linux OS. [This gist](https://gist.github.com/christroutner/a39f656850dc022b60f25c9663dd1cdd) contains commands for installing Docker and Docker Compose.

1. Clone the repository:
  - `git clone https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service`

2. Navigate to the production/docker directory:
  - `cd ipfs-p2wdb-service/production/docker`

3. Pull down the Docker images:
  - `docker-compose pull`

4. Bring up the Docker Containers:
  - `docker-compose up -d`

5. The output of each container can be monitored with the `docker logs` command. Example:
  - `docker logs --tail 20 -f ipfs`

Once the Docker Containers come up successfully, the P2WDB container should begin syncing with the other P2WDB instances on the internet.
