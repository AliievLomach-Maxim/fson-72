import { useEffect } from 'react'
import React from 'react'

const Modal = ({ children, close, renderFn }) => {
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
	const handleClick = (e) => {
		console.log('e.currentTarget :>> ', e.currentTarget)
		console.log('e.target :>> ', e.target)
		if (e.currentTarget === e.target) close()
	}
	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
			onClick={handleClick}
		>
			{renderFn('Alex')}
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
