import { Modal } from 'antd';
import { useState } from 'react';
import {CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import "./AntdModal.css"
import PropTypes from 'prop-types'
import Logo from '../../assests/croge.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearTrxnHash } from '../connect-wallet/root';

const AntdModal = ({hash}) => {
//   const {trxnHash} = useSelector(state => state.root)
  const [isModalVisible, setIsModalVisible] = useState(true);
  const dispatch = useDispatch()

  const handleClose = () => {
    setIsModalVisible(false);
    dispatch(clearTrxnHash())
  };
  
  const link = `https://testnet.cronoscan.com/tx/${hash}`

  return (
    <>
      <Modal visible={isModalVisible} className="antModal" footer={null} bodyStyle={{background:"#201F3E"}} >
        <div className="popUpModal"> 
        <span className='popUpModal__closebtn' onClick={()=>handleClose()}> <CloseCircleOutlined style={{fontSize:"20px"}} /> </span>
        <h2 className="popUpModal__heading"> <CheckCircleOutlined className='popUpModal__check' style={{fontSize:"20px"}}/> Transaction Successfull </h2>
         <img className="popUpModal__img" src={Logo} />
           
           <p> <a href={link} target="_blank" className='popUpModal__link' >View Transaction Details</a> </p>
        </div>
      </Modal>
    </>
  )
  }

export default AntdModal
