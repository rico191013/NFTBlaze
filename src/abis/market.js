/* eslint-disable prettier/prettier */
export const abi = [
    { "inputs": [{ "internalType": "address", "name": "erc721", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "bidder", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "Bid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "EndedSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minPrice", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "OnSale", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "SaleEnded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "quitedBid", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "bid", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "endSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nfts", "outputs": [{ "internalType": "uint256", "name": "minPrice", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "bid", "type": "uint256" }, { "internalType": "address payable", "name": "seller", "type": "address" }, { "internalType": "address payable", "name": "bidder", "type": "address" }, { "internalType": "bool", "name": "isOnSale", "type": "bool" }, { "internalType": "uint256", "name": "bidCount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "putOnAuction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "quitBid", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
]