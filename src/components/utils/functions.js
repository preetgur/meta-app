import { BigNumber, ethers } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { mintAddress, mintABI } from "../SC/mint";
import whitelist from "./whitelistAddresses.json";

export const rinkebyProviderURL = "https://evm.cronos.org/";

// provider

export const mint = async (providerMint, userAddress, amount) => {
    
    if (!userAddress) throw "Connect wallet first.";
    try {

        const mintContract = new ethers.Contract(
            mintAddress,
            mintABI,
            providerMint
        );
        const signer = providerMint.getSigner();
        const mintContractSigner = mintContract.connect(signer);

        let mintcost = await mintContract.mintCost();
        const totalCost = amount * mintcost;
        const transaction = { value: totalCost.toString() };
        const resp = await mintContractSigner.mint(amount, transaction);
        return resp
        // return "Transaction successful."

    } catch (err) {
        if (err.message.includes("whitelisted")) {
            throw "you are not whitelisted";
        }
        throw err.message;
    }
}


export const whitelistMint = async (providerMint, userAddress, amount) => {
    if (!userAddress) throw "Connect wallet first.";
    try {

        const leaves = whitelist.map(x => keccak256(x))
        const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
        const leaf = keccak256(userAddress).toString('hex')
        const proof = tree.getProof(leaf).map(x => "0x" + x.data.toString('hex'))

        if (proof.length === 0) {
            throw new Error("You are not whitelisted");
        }
        const mintContract = new ethers.Contract(
            mintAddress,
            mintABI,
            providerMint
        );
        const signer = providerMint.getSigner();
        const mintContractSigner = mintContract.connect(signer);


        let mintcost = await mintContract.whitelistmintCost();
        const checkHrs = BigNumber.from(await mintContract.checkTime()).toNumber();
        if (checkHrs > 86400) {
            mintcost = await mintContract.whitelistmintCostAfter24hrs();
        }
        const totalCost = amount * mintcost;
        const transaction = { value: totalCost.toString() };
        const resp = await mintContractSigner.whitelistMint(amount, proof, transaction);
        return resp
    } catch (err) {
        if (err.message.includes("whitelisted")) {
            throw "you are not whitelisted";
        }
        throw err.message;
    }
}

//mint balance 

export const mintBalance = async (providerMint, userAddress) => {
    if (!userAddress) return 0;
    let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        provider
    );
    try {
        const balance = parseInt(await mintContract.balanceOf(userAddress));
        console.log("!!! mint balance !!!!",balance)
        return balance;
    } catch (error) {
        console.log("!---- mint balane error ----!",error);
        return 0;
    }
}

// mint price
export const mintPriceCal = async () => {

    let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        provider
    );

    const checkHrs = BigNumber.from(await mintContract.checkTime()).toNumber();
    if (checkHrs > 86400) {
        const mintcost = await mintContract.whitelistmintCostAfter24hrs();
        return ethers.utils.formatEther(mintcost);
    }

    const mintcost = await mintContract.whitelistmintCost();
    return ethers.utils.formatEther(mintcost);
}


export const mintPriceWithoutWhitelist = async () => {

    let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        provider
    );

    const mintcost = await mintContract.mintCost();
    return ethers.utils.formatEther(mintcost);
}

// Sotal supply

export const totalSupply = async () => {
    let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        provider
    );

    const totalSupply = await mintContract.totalSupply();
    return totalSupply;

}
// Max supply
export const maxSupply = async () => {
    let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        provider
    );

    const maxSupply = await mintContract.totalMinted();
    return maxSupply;
}