import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
