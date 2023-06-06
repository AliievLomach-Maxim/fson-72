import React, { Suspense, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
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
			<Suspense>
				<Outlet />
			</Suspense>
			{isShowModal && (
				<Modal close={closeModal}>
					<FormLogin close={closeModal} createUser={createUser} />
				</Modal>
			)}
		</div>
	)
}

export default Layout
