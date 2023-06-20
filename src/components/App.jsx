import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import Layout from './Layout/Layout'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Toaster } from 'react-hot-toast'
// import TodoPage from './pages/TodoPage/TodoPage'
// import TodoDetails from './pages/TodoPage/TodoDetails'
// import ProductsPage from './pages/Products/ProductsPage'
// import ProductsDetails from './pages/Products/ProductsDetails'

const ProductsDetails = lazy(() => import('./pages/Products/ProductsDetails'))
const ProductsPage = lazy(() => import('./pages/Products/ProductsPage'))
const TodoDetails = lazy(() => import('./pages/TodoPage/TodoDetails'))
const TodoPage = lazy(() => import('./pages/TodoPage/TodoPage'))

const App = () => {
	return (
		<>
			<Toaster />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='news' element={<NewsPage />} />
					<Route path='todo' element={<TodoPage />} />
					<Route path='todo/:todoId' element={<TodoDetails />} />
					{/* <Route path='todo' element={<TodoPage />}>
					<Route path=':todoId' element={<TodoDetails />} />
				</Route> */}
					<Route path='products' element={<ProductsPage />} />
					<Route
						path='products/:id'
						element={
							<Suspense>
								<ProductsDetails />
							</Suspense>
						}
					/>
				</Route>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signUp' element={<SignUpPage />} />
			</Routes>
		</>
	)
}

export default App
