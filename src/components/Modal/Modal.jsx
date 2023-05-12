import { Component } from 'react'

class Modal extends Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handlePressESC)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePressESC)
	}

	handlePressESC = (e) => {
		console.log('press')
		if (e.code === 'Escape') this.props.close()
	}

	render() {
		const { children, close } = this.props
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
}

export default Modal
// const Modal = ({ children, close }) => {
// 	return (
// 		<div
// 			className='modal fade show'
// 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 		>
// 			<div className='modal-dialog'>
// 				<div className='modal-content'>
// 					<div className='modal-header'>
// 						<h5 className='modal-title'> Modal</h5>
// 						<button
// 							onClick={close}
// 							type='button'
// 							className='btn-close'
// 							aria-label='Close'
// 						></button>
// 					</div>
// 					<div className='modal-body'>{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Modal
