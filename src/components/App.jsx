import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import TodoPage from './pages/Todo/TodoPage'
import Layout from './Layout/Layout'
import TodoDetailsPage from './pages/Todo/TodoDetailsPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='todo' element={<TodoPage />} />
				<Route path='todo/:todoId' element={<TodoDetailsPage />} />
			</Route>
			{/* <Route path='*' element={<h1>Error 404</h1>} /> */}
		</Routes>
	)
}

export default App
