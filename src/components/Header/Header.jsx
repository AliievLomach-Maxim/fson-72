import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '../../store/auth/slice'
import { dellToken } from '../../api/auth'

const Header = ({ open }) => {
	const { access_token: isAuth, profile } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleLogOut = () => {
		dispatch(logOut())
		dellToken()
	}
	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div className='navbar-nav'>
					<NavLink
						className='nav-link text-white'
						aria-current='page'
						to='/'
					>
						Home
					</NavLink>
					<NavLink className='nav-link text-white' to='/news'>
						News
					</NavLink>
					<NavLink className='nav-link text-white' to='/todo'>
						Todo
					</NavLink>
					<NavLink className='nav-link text-white' to='/products'>
						Products
					</NavLink>
				</div>
				{profile && <h4 className='text-white'>{profile.name}</h4>}
				<button className='btn btn-outline-success' onClick={open}>
					Open Modal
				</button>
				<button
					className='btn btn-outline-success'
					onClick={() => {
						isAuth ? handleLogOut() : navigate('/login')
					}}
				>
					{isAuth ? 'Logout' : 'Login'}
				</button>
			</div>
		</nav>
	)
}

export default Header
