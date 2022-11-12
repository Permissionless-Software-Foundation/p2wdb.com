---
sidebar_position: 1
---

# Get Started
For JavaScript developers who want to get started quickly, this page has links to code examples that can be used to read from or write to the Pay-to-Write Database (P2WDB).

The code examples on this page link to interactive JSFiddles. The code in these fiddles can also be downloaded from the [psf-js-examples](#) repository too.

## Reading from the P2WDB
Reading from the P2WDB is free. There are multiple ways to read data from the P2WDB, depending on your use case.

### Get a Page of Entries
A 'page' of entries is defined as 20 entries. The `getPage()` function returns a page of the most recent entries. For example, the first page is the latest 20 entries. The second page will return the latest entries, starting with the 21st through the 40th latest entry.

`JSFiddle example here`

### Filter by App ID
A page of entries can also be filtered by the `appId`. An App ID is an optional field that can be included during a write. These app IDs allow different applications to write data to the P2WDB, without impacting one another.

`JSFiddle example here`

### Get Entry by CID
A single entry withing the P2WDB can be retrieved by its Content IDentifier (CID). The P2WDB is built on top of [OrbitDB](#), which is in term built on top of [IPFS](https://ipfs.io), which pioneered the concept of a CID. CIDs for OrbitDB start with the letter 'z'.

`JSFiddle example here`

### Get Entry by TXID

An alternative way to retrieve a single entry is with the transaction ID (TXID) on the blockchain that was used as a proof-of-burn. These TXIDs provide a unique way to identify each entry, just like the CID.

`JSFiddle example here`

## Writing to the P2WDB
Up to 10KB of arbitrary data can be written to the P2WDB per entry, and the most common format uses JSON. In the example below, only BCH is needed in order to write to the database. 

`JSFiddle example here`

Note: The P2WDB instance will charge 10% extra on top of the market-value of PSF tokens, and will burn them on behalf of the user. Users can avoid the 10% surcharge by holding PSF tokens in the address paying for the write, or by finding another instance on the network that charges lower fees.

### eCash Write
This example is the same as above, but shows how to write to the P2WDB instance on the eCash blockchain:
`JSFiddle example here`