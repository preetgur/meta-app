import { BigNumber, ethers } from 'ethers';
import { mintAddress, mintABI } from "../SC/mint";

export const rinkebyProviderURL = "https://rinkeby.infura.io/v3/916696a1cc3743429508f70424840709";

// provider
// let provider = new ethers.providers.JsonRpcProvider(rinkebyProviderURL);

export const mint = async (providerMint, userAddress, amount) => {
    if (!userAddress) return "Connect wallet first.";
    try {
        const mintContract = new ethers.Contract(
            mintAddress,
            mintABI,
            providerMint
        );
        const signer = providerMint.getSigner();
        const mintContractSigner = mintContract.connect(signer);
        const mintcost = await mintContract.mintcost();
        const totalCost = amount * mintcost;
        const transaction = { value: totalCost.toString() };
        await mintContractSigner.mint(amount, transaction);
        return "Transaction successful."
    } catch (err) {
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

    const mintcost = await mintContract.mintcost();
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