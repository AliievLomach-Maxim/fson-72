import { Component, useState } from 'react'
import React from 'react'

const FormLogin = ({ createUser, close }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isChecked, setIsChecked] = useState(false)
	const [gender, setGender] = useState('')

	const handleChange = ({ target: { value, name } }) => {
		// this.setState({
		// 	[name]: value,
		// })
		if (name === 'email') {
			setEmail(value)
		}
		// name==='email'&&setEmail(value)
		else if (name === 'password') setPassword(value)
	}

	const validator = ({ target: { name, value } }) => {
		if (name === 'password') {
			!value.includes('!') && alert('password must includes "!"')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createUser({
			email,
			userPassword: password,
		})
		// this.setState({
		// 	email: '',
		// 	password: '',
		// 	isChecked: false,
		// })
		setEmail('')
		setPassword('')
		setIsChecked(false)
		close()
	}

	const handleCheck = ({ target: { checked } }) => {
		// this.setState({
		// 	isChecked: !this.state.isChecked,
		// })
		setIsChecked(checked)
	}

	const handleGender = ({ target: { name } }) => {
		// this.setState({ gender: name })
		setGender(name)
	}

	return (
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
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					name='password'
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					onChange={handleChange}
					onBlur={validator}
					disabled={!email}
					value={password}
				/>
			</div>
			<div className='mb-3 form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					checked={isChecked}
					onChange={handleCheck}
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					I agree
				</label>
			</div>
			<div className='mb-3 form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='male'
					id='flexRadioDefault1'
					checked={gender === 'male'}
					onChange={handleGender}
				/>
				<label className='form-check-label' htmlFor='flexRadioDefault1'>
					Male
				</label>
			</div>
			<div className=' mb-3 form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='female'
					id='flexRadioDefault2'
					checked={gender === 'female'}
					// onChange={() => setState({ gender: 'female' })}
					onChange={handleGender}
				/>
				<label className='form-check-label' htmlFor='flexRadioDefault2'>
					Female
				</label>
			</div>
			<div className='mb-3 form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='other'
					id='flexRadioDefault3'
					checked={gender === 'other'}
					// onChange={() => setState({ gender: 'other' })}
					onChange={handleGender}
				/>
				<label className='form-check-label' htmlFor='flexRadioDefault3'>
					Other
				</label>
			</div>
			<button
				type='submit'
				className='btn btn-primary'
				disabled={!email || !password || !isChecked}
			>
				Submit
			</button>
		</form>
	)
}

export default FormLogin
// class FormLogin extends Component {
// 	state = {
// 		email: '',
// 		password: '',
// 		isChecked: false,
// 		gender: '',
// 	}

// 	handleChange = ({ target: { value, name } }) => {
// 		this.setState({
// 			[name]: value,
// 		})
// 	}
// 	validator = ({ target: { name, value } }) => {
// 		if (name === 'password') {
// 			!value.includes('!') && alert('password must includes "!"')
// 		}
// 	}
// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		this.props.createUser({
// 			email: this.state.email,
// 			userPassword: this.state.password,
// 		})
// 		this.setState({
// 			email: '',
// 			password: '',
// 			isChecked: false,
// 		})
// 		this.props.close()
// 	}
// 	handleCheck = ({ target: { checked } }) => {
// 		this.setState({
// 			isChecked: !this.state.isChecked,
// 		})
// 	}

// 	handleGender = ({ target: { name } }) => {
// 		this.setState({ gender: name })
// 	}
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputEmail1' className='form-label'>
// 						Email address
// 					</label>
// 					<input
// 						name='email'
// 						type='email'
// 						className='form-control'
// 						id='exampleInputEmail1'
// 						aria-describedby='emailHelp'
// 						onChange={this.handleChange}
// 						value={this.state.email}
// 					/>
// 					<div id='emailHelp' className='form-text'>
// 						We'll never share your email with anyone else.
// 					</div>
// 				</div>
// 				<div className='mb-3'>
// 					<label
// 						htmlFor='exampleInputPassword1'
// 						className='form-label'
// 					>
// 						Password
// 					</label>
// 					<input
// 						name='password'
// 						type='password'
// 						className='form-control'
// 						id='exampleInputPassword1'
// 						onChange={this.handleChange}
// 						onBlur={this.validator}
// 						disabled={!this.state.email}
// 						value={this.state.password}
// 					/>
// 				</div>
// 				<div className='mb-3 form-check'>
// 					<input
// 						type='checkbox'
// 						className='form-check-input'
// 						id='exampleCheck1'
// 						checked={this.state.isChecked}
// 						onChange={this.handleCheck}
// 					/>
// 					<label className='form-check-label' htmlFor='exampleCheck1'>
// 						I agree
// 					</label>
// 				</div>
// 				<div className='mb-3 form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='male'
// 						id='flexRadioDefault1'
// 						checked={this.state.gender === 'male'}
// 						onChange={this.handleGender}
// 					/>
// 					<label
// 						className='form-check-label'
// 						htmlFor='flexRadioDefault1'
// 					>
// 						Male
// 					</label>
// 				</div>
// 				<div className=' mb-3 form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='female'
// 						id='flexRadioDefault2'
// 						checked={this.state.gender === 'female'}
// 						// onChange={() => this.setState({ gender: 'female' })}
// 						onChange={this.handleGender}
// 					/>
// 					<label
// 						className='form-check-label'
// 						htmlFor='flexRadioDefault2'
// 					>
// 						Female
// 					</label>
// 				</div>
// 				<div className='mb-3 form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='other'
// 						id='flexRadioDefault3'
// 						checked={this.state.gender === 'other'}
// 						// onChange={() => this.setState({ gender: 'other' })}
// 						onChange={this.handleGender}
// 					/>
// 					<label
// 						className='form-check-label'
// 						htmlFor='flexRadioDefault3'
// 					>
// 						Other
// 					</label>
// 				</div>
// 				<button
// 					type='submit'
// 					className='btn btn-primary'
// 					disabled={
// 						!this.state.email ||
// 						!this.state.password ||
// 						!this.state.isChecked
// 					}
// 				>
// 					Submit
// 				</button>
// 			</form>
// 		)
// 	}
// }

// export default FormLogin
