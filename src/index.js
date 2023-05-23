import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
