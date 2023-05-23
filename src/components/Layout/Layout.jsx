import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'

const Layout = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	const openModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)
	const createUser = (data) => {
		const newUser = {
			...data,
			id: Date.now(),
			role: 'customer',
		}
		console.log(newUser)
	}

	return (
		<div className='container'>
			<Header open={openModal} />
			<Outlet />
			{isShowModal && (
				<Modal close={closeModal}>
					<FormLogin close={closeModal} createUser={createUser} />
					{/* Hello */}
				</Modal>
			)}
		</div>
	)
}

export default Layout
