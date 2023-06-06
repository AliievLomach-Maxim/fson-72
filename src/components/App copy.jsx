import { useState } from 'react'
// import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
// import Parent from './Parent/Parent'
import FormLogin from './FormLogin/FormLogin'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import Avatar from '../image.svg'

import React from 'react'
import TestUseMemo from './TestUseMemo/TestUseMemo'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	const [searchText, setSearchText] = useState('default')

	// useEffect(() => {
	// 	console.log('effect')
	// })

	// useEffect(() => {
	// 	console.log('effect2')
	// }, [])

	// useEffect(() => {
	// 	searchText !== 'default' && console.log('effect3')
	// }, [searchText])

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

	const handleSearch = (searchText) => setSearchText(searchText)

	return (
		<div className='container'>
			<Header open={openModal} />
			{/* <img src={Avatar} alt="" /> */}
			{/* <Counter /> */}
			{/* <ToDoList /> */}
			<TestUseMemo />
			{/* <Search handleSearch={handleSearch} />
			<ContentInfo searchText={searchText} /> */}
			{isShowModal && (
				<Modal close={closeModal}>
					<FormLogin close={closeModal} createUser={createUser} />
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
// 			<div className='container'>
// 				<Header open={this.openModal} />
// 				{/* <img src={Avatar} alt="" /> */}
// 				{/* <Counter /> */}
// 				{/* <ToDoList /> */}

// 				{/* <Parent close={this.closeModal} isOpen={this.state.isShowModal}>
// 					Some
// 				</Parent> */}
// 				<Search handleSearch={this.handleSearch} />
// 				<ContentInfo searchText={this.state.searchText} />
// 				{this.state.isShowModal && (
// 					<Modal close={this.closeModal}>
// 						<FormLogin
// 							close={this.closeModal}
// 							createUser={this.createUser}
// 						/>
// 					</Modal>
// 				)}
// 			</div>
// 		)
// 	}
// }

// export default App
