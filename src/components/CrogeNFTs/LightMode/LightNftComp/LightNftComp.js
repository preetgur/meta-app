import React, { useState, useEffect } from 'react';
import "./LightNftComp.css";
import BgOne from '../../../../assests/a.png';
import BgTwo from '../../../../assests/b.png';
import Stars from '../../../../assests/stars.png';
import Dots from '../../../../assests/dots.png';
import NftCrog from "../../../../assests/nftcrog.png";
import { useNavigate } from 'react-router-dom';
import { Progress, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { mint, mintBalance, mintPriceCal, totalSupply, maxSupply, whitelistMint, mintPriceWithoutWhitelist} from "../../../utils/functions";
import { notification } from 'antd';
import { setTrxnHash } from '../../../connect-wallet/root';
import AntdModal from '../../../CustomModal/AntModal';

const LightNftComp = ({ color, background }) => {
    const [countVal, setCountVal] = useState(1);
    const [isDark, setIsDark] = useState(true);
    const [balance, setBalance] = useState(0);
    const [mintPrice, setMintPrice] = useState(0);
    const [tSupply, setTSupply] = useState(0);
    const [mSupply, setMSupplay] = useState(1000);
    const [max, setMax] = useState(false);
    const [percentage, setPercentage] = useState(1);
    const [txnStatus, setTxnStatus ] = useState(false);
    const [transactionHash,setTransactionHash] = useState('')
    const [isLoading,setIsLoading]= useState(false)
    const dispatch = useDispatch()
    const {
        userAddress,
        provider
    } = useSelector((state) => state.root);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (userAddress) {
                const response = await mintBalance(provider, userAddress);
                setBalance(response);
            }
            let responseMintPrice;
            if(window.location.href.includes("whitelist-mint")){
                responseMintPrice = await mintPriceCal();
            }else{
                responseMintPrice = await mintPriceWithoutWhitelist();
            }
            setMintPrice(responseMintPrice);
            const responseTotalSupply = await totalSupply();
            setTSupply(parseInt(responseTotalSupply));
            setPercentage(100 * tSupply/mSupply);
        }
        fetchData();
    }, [userAddress, txnStatus])
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        console.log("state", isDark)
        setIsDark(isDark => !isDark)

    };

    

    const handleIncrement = () => {
        if(countVal > 9 ) {
            notification.error({message: "Mint amount must be less than  or equal to 10."})
            return;
        }
        setCountVal(prevData => prevData + 1)
    }

    const handleDecrement = () => {
        if(countVal <= 1) return;
        setCountVal(prevData => prevData - 1)
    }

    const mintHandler = async () => {
        try {
            
        
        if(countVal > 10){
          notification.error({message: "Mint amount must be less than  or equal to 10."})
          return null;
        }
        if(window.location.href.includes("whitelist-mint")){
            console.log("!---- whitelist-mint -----!")
            const response = await whitelistMint(provider, userAddress, countVal);
            console.log("!---- whitelist-mint-resp -----!",response)

            notification.info({ message: response });
            setTxnStatus(true);
            return;
        }
        setIsLoading(true)
        const response = await mint(provider, userAddress, countVal);
        console.log("!---- mint ---- response -----!",response)
        setTransactionHash(response?.hash)
        dispatch(setTrxnHash(response?.hash)) //  dispatch store action
        notification.success({ message: "Transaction successful." });
        setTxnStatus(true);
        setIsLoading(false)

    } catch (error) {
        notification.error({ message: error });
        setIsLoading(false)
            
    }
      }

    const maxHandler = async() => {
        setCountVal(10);
        setMax(true);
    }

    const showTotalHandler = () => {
        if (max){
            return (mintPrice * 10).toFixed(2);
        }else{
            return (countVal * mintPrice).toFixed(2);
        }
    }
    return (
        <div className='nft__light' style={{ background: `${color}` }} >
            <div className='bg__top'>
                <img src={BgOne} />
            </div>
            <div className='bg__bottom'>
                <img src={BgTwo} />
            </div>
            <div className='star__one'>
                <img src={Stars} />
            </div>
            <div className='star__two'>
                <img src={Stars} />
            </div>
            <div className='dots__one'>
                <img src={Dots} />
            </div>
            <div className='dots__two'>
                <img src={Dots} />
            </div>
            <div className='nft_crogs'>
                <img src={NftCrog} />
            </div>

            <div className='mint-div' style={{ background: `${background}` }}>
                <div className='mint_price'>
                    <div className='minted-loader'>
                        <Progress type="circle" percent={(100 *  tSupply/mSupply)} />
                    </div>
                    <div className='mint-header'>
                        <h1>Mint NFT</h1>
                        <p>Mint Price {mintPrice} CRO</p>
                    </div>

                </div>
                <div className='minted__text'>
                    <p>{tSupply}/{mSupply}</p>
                    <p style={{ lineHeight: "0" }}> MINTED</p>
                </div>
                <div className='mint-inputs'>
                    <div className='amount_handler-div'>
                        <div className='max-plus_div'>
                            <div className='amount-mint_div'>
                                <button onClick={handleDecrement} >-</button>
                                <p>{countVal}</p>
                                <button onClick={handleIncrement} style={{ color: "#74C5E1" }}>+</button>
                            </div>
                            <div className='amount-btn-div'>
                                <button onClick={maxHandler}>MAX</button>
                            </div>
                        </div>
                        <span>Amount</span>


                    </div>
                    <div className='max-amount_div'>
                        <div className='input-wrapper'>

                        <input type="text"value={showTotalHandler()} readOnly />
                        <span className='prefix'>CRO</span>
                        </div>

                        <label>Total</label>
                    </div>
                    <div className='mint__button-div'>
                        {isLoading ? 
                            <button className='loading-div'>
                                <div className="loading-spinner"> </div>
                            </button> : 
                            <button onClick={() => mintHandler()}>Mint</button>
                        }
                    </div>
                </div>
            </div>
            {/* Ant modal pop up */}
          {transactionHash &&  <AntdModal hash={transactionHash}/>}
           {/* <AntdModal hash={transactionHash}/> */}

        </div>
    )
}

export default LightNftComp;


