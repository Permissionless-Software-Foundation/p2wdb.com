---
sidebar_position: 2
---

# Circuit Relays

An [IPFS Circuit Relay](https://docs.libp2p.io/concepts/circuit-relay/) is an IPFS node that can help two other IPFS nodes communicate across the internet, when a firewall would otherwise block them from talking to one another.

![Circuit Relay](../img/circuit-relay01.png)

Circuit Relays are a critical piece in the censorship resistance, and are a core element in forming a mesh network.

In the Cash Stack, Circuit Relays are operated by running the [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) software. Requirements for successfully operating one are described in the [Circuit Relay Bounty](https://github.com/Permissionless-Software-Foundation/bounties/blob/master/bounties/active/circuit-relays.md). These are light-weight and inexpensive to operate, but they have specific requirements around their connection to the internet.

## Network Configuration

The core dependency of [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) is the [ipfs-coord](https://www.npmjs.com/package/ipfs-coord) library. `ipfs-coord` controls the IPFS node and forms a mesh network with other nodes running PSF software.

All other PSF software that is based on IPFS will automatically find and connect to Circuit Relays, eliminating any complex setup. But creating a Circuit Relay requires a specific network configuration:

- The PSF currently operates on a [*private* IPFS network](https://github.com/ipfs/go-ipfs/blob/master/docs/experimental-features.md#private-networks), which is setup using a `swarm.key` file.
- The Circuit Relay requires a public ipv4 or ipv6 address.
- The `ENABLE_CIRCUIT_RELAY` environment variable must be set to a value of 1
- In order to provide network access to browser-based IPFS nodes, the Circuit Relay must be available over secure websockets, which requires a registered domain name with an SSL certificate.
