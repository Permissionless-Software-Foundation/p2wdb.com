---
sidebar_position: 1
---

# Introduction

The 'Cash Stack' is a framework for building Web 2 and Web 3 applications on the BCH, eCash, AVAX X-Chain, and other UTXO-based blockchains. It sets itself apart from other software and blockchain-based frameworks by placing strong emphasis on the following areas:

- **Censorship Resistance**: circumventing State or corporate attempts to block or tamper with data.
- **Self Sufficiency**: reducing or eliminating dependency on third parties.
- **JavaScript** is the only programming language used.
- **Docker Compose** is used to abstract and orchestrate the different sub-components.
- **Ubuntu Linux** is the target operating system for all software.

The Cash Stack is not just a library or even a single repository. It is a collection of code repositories that are orchestrated much like Lego blocks. Many of the pieces are interchangeable and re-configurable. This allows a wide range of business applications to be built across several different blockchains.

## Inspiration

The Cash Stack is inspired by the [OSI model](https://www.bmc.com/blogs/osi-model-7-layers/). It helps software developers discuss technical issues, by framing the conversation with regard to 'which layer in the stack' any one particular issue lives. This makes it easier to isolate (and ultimately fix) networking issues.

This model applies to all blockchain-based applications, regardless of the specific blockchain used. For example, this model applies to BTC, BCH, XEC, BSV, ETH, and AVAX.


![The Cash Stack](./img/cash-stack-rough.png)

The layers of the stack show the path that data travels between an app and the blockchain. Here is an explanation of each layer:

- **Application** is the end-user software. The wallet, trading app, social media, or other app that the user interacts with directly. In addition to the user interface (UI), this layer also includes *application libraries* which include business logic and high-level abstractions.

- **Interface Library** is the library that application libraries call to interact with the blockchain or other web3 back end resource. In many cases, this layer is made up of [bch-js](https://www.npmjs.com/package/@psf/bch-js), [bch-consumer](https://www.npmjs.com/package/bch-consumer), or their various extension libraries.

- **API** is either a REST API or JSON RPC server software. This layer is called by the layer above it (the interface library), for the purpose of communicating across the internet. The API provides a single interface for applications to call, in order to indirectly interact with back end services like databases, indexers, and full nodes.

- **Indexers** are like small search engines, which crawl the blockchain data, and piece together metadata that is not directly available from the raw blockchain. An example of this is the [Fulcrum](https://github.com/Permissionless-Software-Foundation/docker-fulcrum) indexer, which is responsible for tracking address balances, transaction history, and UTXOs. Another common indexer is the [psf-slp-indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer), which tracks all SLP tokens on the blockchain.

- **Full Nodes** are the most basic blockchain software. This is the software that interacts directly with the blockchain, by broadcasting transactions and verifying new blocks. Full Nodes often use a JSON RPC or REST API to communicate.

## Web 2

The Cash Stack was originally conceived to help communicate the software layers used by [FullStack.cash](https://fullstack.cash) and [developer.bitcoin.com](https://developer.bitcoin.com/), to show how software developers can use it to build apps on the Bitcoin Cash (BCH) blockchain. But when abstracted as above, the same conceptual framework applies to all blockchains.

This is a more specific implementation of the Cash Stack that is used by [FullStack.cash](https://fullstack.cash) for working with the Bitcoin Cash (BCH) and eCash (XEC) blockchains:

![The FullStack.cash Cash Stack](./img/cash-stack-annotated.png)

The web 2 app is usually broken up into to a 'front end' and a 'back end'. Many software developers specialize in one of these areas. Services like FullStack.cash provide the back end infrastructure-as-a-service.

![Web 2 Cash Stack](./img/cash-stack-web-2.png)

The achilles heel of this model is censorship. It's fragile in the face of any censorship. There are well-established industry best practices for censoring this architecture.

This architecture is also expensive. It's not practical to run this architecture from a home server. Cloud infrastructure is required in all but the most exceptional of cases. Cloud infrastructure has a monthly cost. Stop paying and the infrastructure disappears like smoke. Hobby developers may be able to run this infrastructure at home, but they can not break out of the hobby-category without funding.

## Web 3

The Web 3.0 Cash Stack inserts two new blocks into the middle of the stack, which are mirror images of one another:

- *[IPFS Service Consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer)* - Provides a light-weight 'local' REST API, that proxies calls to a 'global' back end, over IPFS.
- *[IPFS Service Provider](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service)* - Receives data over IPFS, and proxies the network calls to the compute-heavy 'global' infrastructure.


![Web 3 Cash Stack](./img/cash-stack-web-3.png)

By adding these two new pieces of software, it decouples the expensive 'global' back end infrastructure, and proxies it to a much less expensive 'local' back end REST API. This has several advantages:

- Because IPFS automatically handles the complex networking, it's much more pragmatic to run the expensive, global back end infrastructure from a home internet connection. This reduces the greatest cost of the Web 2.0 model.<br /><br />
- By leveraging [Circuit Relays](https://docs.libp2p.io/concepts/circuit-relay/), this architecture is extremely resistant to attempts at censorship.<br /><br />
- Because of the decoupling, the _local back end_ is capable of using one-of-many instances of the _global back end_. It only needs to connect to one in order to succeed, and it can choose any instance on the network.

If implemented correctly, the performance should be acceptable to the end-users. The extra layers add some latency, but it provides much lower cost. Whether this architecture is appropriate for end-users depends on the specific application, but the trade-offs may be acceptable. If there is no company to pay for web 2.0 architecture, this web 3.0 architecture may be the only financially practical way to roll out an app.

This architecture really exceeds at censorship resistance, and providing low-cost infrastructure for hobbyists developers. Developers unfamiliar with running back end infrastructure, who want to focus primarily on front end applications, can run a single, simple app to provide the local back end. Developers more comfortable with Dev Ops and running back end infrastructure, can provide the global back end infrastructure to the rest of the community, from the comfort (and cost-savings) of their own home. The [Permissionless Software Foundation](https://psfoundation.cash) (PSF) is offering [Bounties](https://github.com/Permissionless-Software-Foundation/bounties) to incentivize hobby developers to run this global back end infrastructure.

The rest of this documentation walks through the various software packages that the PSF maintains, and how they fit into the Cash Stack.
