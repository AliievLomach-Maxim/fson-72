import React from 'react'
import Modal from '../Modal/Modal'

const Parent = ({ children, isOpen, close }) => {
	return isOpen && <Modal close={close}>{children}</Modal>
}

export default Parent
