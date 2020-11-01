import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalContainer = ({ show, component }:any) => {
  if (!show) {
    return <></>
  }
  return <Modal className="ReactModal__Content__modal" isOpen={show}>{component}</Modal>
}


export default ModalContainer
