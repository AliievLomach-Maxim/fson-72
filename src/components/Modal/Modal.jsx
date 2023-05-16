import { Component, useEffect } from 'react'
import React from 'react'

const Modal = ({ children, close }) => {
	useEffect(() => {
		const handlePressESC = (e) => {
			console.log('press')
			if (e.code === 'Escape') close()
		}
		document.addEventListener('keydown', handlePressESC)
		return () => {
			document.removeEventListener('keydown', handlePressESC)
		}
	}, [close])

	// useEffect(() => () => console.log('Unmount'), [])

	// 	componentDidMount() {
	// 	document.addEventListener('keydown', this.handlePressESC)
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener('keydown', this.handlePressESC)
	// }

	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							onClick={close}
							type='button'
							className='btn-close'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
// class Modal extends Component {
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handlePressESC)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handlePressESC)
// 	}

// 	handlePressESC = (e) => {
// 		console.log('press')
// 		if (e.code === 'Escape') this.props.close()
// 	}

// 	render() {
// 		const { children, close } = this.props
// 		return (
// <div
// 	className='modal fade show'
// 	style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// >
// 	<div className='modal-dialog'>
// 		<div className='modal-content'>
// 			<div className='modal-header'>
// 				<h5 className='modal-title'> Modal</h5>
// 				<button
// 					onClick={close}
// 					type='button'
// 					className='btn-close'
// 					aria-label='Close'
// 				></button>
// 			</div>
// 			<div className='modal-body'>{children}</div>
// 		</div>
// 	</div>
// </div>
// 		)
// 	}
// }

// export default Modal
// // const Modal = ({ children, close }) => {
// // 	return (
// <div
// 	className='modal fade show'
// 	style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// >
// 	<div className='modal-dialog'>
// 		<div className='modal-content'>
// 			<div className='modal-header'>
// 				<h5 className='modal-title'> Modal</h5>
// 				<button
// 					onClick={close}
// 					type='button'
// 					className='btn-close'
// 					aria-label='Close'
// 				></button>
// 			</div>
// 			<div className='modal-body'>{children}</div>
// 		</div>
// 	</div>
// </div>
// // 	)
// // }

// // export default Modal

// {
// 	/* <Component/> */
// }
// function component({ value1, value2 }) {}

// component({ value1: 10, value2: 20, value3: 30 })

// function Comp({ value1, value2, value3, children }) {
// 	return <></>
// }

// ;<>
// 	<h1>
// 		{Comp({ value1: 10, value2: 20, value3: 30 })}
// 		<Comp value1={10} value2={20} value3={30} />
// 		<Comp>ashfdhgasfdasdsgad</Comp>
// 	</h1>
// </>
