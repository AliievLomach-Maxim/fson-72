// import ToDoList from './ToDoList/ToDoList'
import { useState, useEffect } from 'react'
import Modal from './Modal/Modal'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
// import { Component } from 'react'
// import Parent from './Parent/Parent'
import FormLogin from './FormLogin/FormLogin'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'

import React from 'react'
import TestUseMemo from './TestUseMemo/TestUseMemo'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	const [searchText, setSearchText] = useState('')

	// cdu every render
	useEffect(() => {
		console.log('Effect')
	})

	// cdm
	useEffect(() => {
		console.log('Effect 2')
	}, [])

	// cdu with if
	useEffect(() => {
		if (searchText) console.log('Effect 3')
	}, [searchText])

	// cdu + cdm
	useEffect(() => {
		console.log('Effect 4')
	}, [searchText])

	useEffect(() => {
		if (searchText && isShowModal) console.log('Effect 3')
	}, [searchText, isShowModal])

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

	const someRenderFn = (data) => {
		createUser()

		return (
			<li>
				{data}
				{searchText}
			</li>
		)
	}

	const handleSearch = (searchText) => setSearchText(searchText)

	return (
		<div className='container'>
			<Header open={openModal} />
			{/* <Counter /> */}
			<TestUseMemo />
			{/* <ToDoList /> */}

			{/* <Parent close={closeModal} isOpen={state.isShowModal}>
					Some
				</Parent> */}
			{/* <Search handleSearch={handleSearch} />
			<ContentInfo searchText={searchText} /> */}

			{isShowModal && (
				<Modal close={closeModal} renderFn={someRenderFn}>
					<FormLogin close={closeModal} createUser={createUser} />
					{/* Hello */}
				</Modal>
			)}
		</div>
	)
}

export default App

// class App extends Component {
// 	state = { isShowModal: false, searchText: '' }

// 	openModal = () => {
// 		this.setState({ isShowModal: true })
// 	}
// 	closeModal = () => {
// 		this.setState({ isShowModal: false })
// 	}

// 	createUser = (data) => {
// 		const newUser = {
// 			...data,
// 			id: Date.now(),
// 			role: 'customer',
// 		}
// 		console.log(newUser)
// 	}

// 	handleSearch = (searchText) => {
// 		this.setState({ searchText })
// 	}

// 	render() {
// 		return (
// <div className='container'>
// 	<Header open={this.openModal} />
// 	{/* <Counter /> */}
// 	{/* <ToDoList /> */}

// 	{/* <Parent close={this.closeModal} isOpen={this.state.isShowModal}>
// 		Some
// 	</Parent> */}
// 	<Search handleSearch={this.handleSearch} />
// 	<ContentInfo searchText={this.state.searchText} />

// 	{this.state.isShowModal && (
// 		<Modal close={this.closeModal}>
// 			<FormLogin
// 				close={this.closeModal}
// 				createUser={this.createUser}
// 			/>
// 		</Modal>
// 	)}
// </div>
// 		)
// 	}
// }

// export default App
