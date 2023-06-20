import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginThunk } from '../../store/auth/thunks'
import { toast } from 'react-hot-toast'

const LoginPage = () => {
	const isAuth = useSelector((state) => state.auth.access_token)
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(loginThunk({ email, password }))
		// login({ email, password })
	}

	const handleChange = ({ target: { value, name } }) => {
		name === 'email' ? setEmail(value) : setPassword(value)
	}

	useEffect(() => {
		isAuth && navigate('/')
		isAuth && toast.success('Welcome')
	}, [isAuth, navigate])

	return (
		<div className='container p-4'>
			<h2>Log In</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={handleChange}
						value={password}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary me-3'
					disabled={!email || !password}
				>
					Login
				</button>
				<Link to='/signUp'>Sign Up</Link>
			</form>
		</div>
	)
}

export default LoginPage
