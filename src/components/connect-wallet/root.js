import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import WalletLink from 'walletlink'
import toast from 'react-hot-toast'
import {ethers} from 'ethers'
import networks from '../Contracts/networkConfi.json'

const INFURAID = "795fff49a454480d945bde511a2b712c";

export const addNewNetwork = async (id) => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId: networks[id]?.chainId}],
    })
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [networks[id]],
        })
      } catch (addError) {}
    }
  }
}

export const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURAID // required
      },
     qrcodeModalOptions: {
        mobileLinks: [
            "metamask",
            "trust",
            "argent",
            "rainbow",
            "imtoken",
            "pillar",
        ]
    }
},
  injected: {
    display: {
      name: 'Metamask',
      description: 'Connect with the provider in your Browser',
    },
    package: null,
  },
 
}
export const connectToWallet = createAsyncThunk('wallet', async () => {
    console.log("connecting wallet")
  try {
    

    const web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider:true
    })
    const instance = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    const accounts = await provider.listAccounts()
    const {chainId} = await provider.getNetwork()
    console.log("chainIdchainIdchainIdchainId", chainId)
    // if(chainId !== 97) {
    //  await addNewNetwork(97);
    // //  window.location.reload();
    // }
    return {
      instance,
      web3Modal,
      provider,
      userAddress: accounts[0],
      chainId: chainId,
    }
  } catch (error) {
    console.log(error.message)
  }
})



export const disconnectWallet = createAsyncThunk('disconnect/wallet',async(_,thunkAPI) => {

  const web3Modal = thunkAPI.getState().root.web3Modal;
  const provider = thunkAPI.getState().root.provider;

  if(web3Modal?.providerController?.cachedProvider === "walletconnect"){
    localStorage.removeItem('walletconnect')
  }
  if (provider.close) {
    await provider.close()
    await web3Modal.clearCachedProvider()
  }
  await web3Modal.clearCachedProvider()
  window.location.reload()
})
const initialState = {
  provider: localStorage.getItem("provider") ? JSON.parse(localStorage.getItem("provider")) :null,
  userAddress: localStorage.getItem("userAddress") ? localStorage.getItem("userAddress") : '',
  chainId: 0,
  web3Modal: null,
  token: 'CATOSHI',
  secondChain: 'BSC',
  balanceOfChain: 0,
  balanceOfSecondChain: 0,
  transactionHash: '',
  swapLoading: false,
  trxnHash:'',
  instance: null
}


const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    updateToken(state, {payload}) {
      state.token = payload
    },
    setUserAddress(state,action){
      const {payload} = action
      state.userAddress = payload.account
      state.web3Modal = payload.web3Modal
      state.provider = payload.provider
      state.chainId = payload.chainId
    },
    updateSecondChain(state, {payload}) {
      state.secondChain = payload
    },
    updateFirstChainBalances(state, {payload}) {
      state.balanceOfChain = payload
    },
    updateSecondChainBalances(state, {payload}) {
      state.balanceOfSecondChain = payload
    },
    updateUserAddress(state, {payload}) {
      state.userAddress = payload
    },
    updateChainId(state, {payload}) {
      state.chainId = payload
    },
    clearHashValue(state, {payload}) {
      state.transactionHash = ''
    },
    setTrxnHash(state,action){
      const{payload}  = action
      console.log("!---- setTrn has func ---!",action)
      state.trxnHash = payload
    },
    clearTrxnHash(state){
      state.trxnHash =''
    },
  },
  extraReducers: {
    [connectToWallet.pending]: (state) => {},
    [connectToWallet.fulfilled]: (state, {payload}) => {
      // return by connectToWallet function
      state.provider = payload?.provider
      state.userAddress = payload?.userAddress
      state.chainId = payload?.chainId
      state.web3Modal = payload?.web3Modal
      state.instance = payload.instance

      toast.success('Wallet Connected')
    },
    [connectToWallet.rejected]: (state, {error}) => {
      if (error.code === 4001) {
        // console.log('Please connect to MetaMask.')
        toast.error('Please connect to MetaMask.')

      } else {
        console.error(error)
      }
    },
    [disconnectWallet.fulfilled]:(state) =>{
      state.userAddress = ''
      state.provider = null
      state.chainId = 0
      state.web3Modal =null
    },
   
  },
})

export default rootSlice.reducer
export const {
  updateUserAddress,
  updateToken,
  updateSecondChain,
  updateFirstChainBalances,
  updateSecondChainBalances,
  clearHashValue,
  setTrxnHash,
  clearTrxnHash,
  setUserAddress,
  updateChainId
} = rootSlice.actions
 