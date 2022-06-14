import { BigNumber, ethers } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { mintAddress, mintABI } from "../SC/mint";
import whitelist from "./whitelistAddresses.json";

export const rinkebyProviderURL = "https://rinkeby.infura.io/v3/916696a1cc3743429508f70424840709";

// provider
// let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);

export const mint = async (providerMint, userAddress, amount) => {
    if (!userAddress) return "Connect wallet first.";
  
    try {

        const leaves = whitelist.map(x => keccak256(x))
        const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
        const leaf = keccak256(userAddress).toString('hex')
        const proof = tree.getProof(leaf).map(x => "0x" + x.data.toString('hex'))
       
        if(proof.length === 0){ 
            throw new Error("You are not whitelisted");
        }
        const mintContract = new ethers.Contract(
            mintAddress,
            mintABI,
            providerMint
        );
        const signer = providerMint.getSigner();
        const mintContractSigner = mintContract.connect(signer);
        const mintcost = await mintContract.whitelistmintCost();
        const totalCost = amount * mintcost;
        const transaction = { value: totalCost.toString() };
        await mintContractSigner.whitelistMint(amount,proof, transaction);
        return "Transaction successful."
    } catch (err) {
        if(err.message.includes("whitelisted")){
           return "you are not whitelisted";
        }
        return err.message;
    }
}

//mint balance 

export const mintBalance = async (providerMint, userAddress) => {
    if (!userAddress) return 0;
    const mintContract = new ethers.Contract(
        mintAddress,
        mintABI,
        providerMint
    );
    try {
        const balance = parseInt(await mintContract.balanceOf(userAddress));
        return balance;
    } catch (error) {
        console.log(error);
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

    const mintcost = await mintContract.whitelistmintCost();
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