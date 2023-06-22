import React, { Suspense, useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../store/auth/thunks'
import { setToken } from '../../api/auth'
import { logOut } from '../../store/auth/slice'

const Layout = () => {
	const { access_token, profile } = useSelector((state) => state.auth)

	const [isShowModal, setIsShowModal] = useState(false)

	const dispatch = useDispatch()

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

	useEffect(() => {
		if (access_token && !profile) {
			setToken(access_token)
			dispatch(getProfileThunk())
				.unwrap()
				.catch(() => dispatch(logOut()))
		}
	}, [access_token, dispatch, profile])

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
