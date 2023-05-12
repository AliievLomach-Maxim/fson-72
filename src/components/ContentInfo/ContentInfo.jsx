import { Component } from 'react'
import { getSearchNews } from '../../api/api'
import ErrorCard from './ErrorCard'
import Loader from './Loader'
import NoResultCard from './NoResultCard'
import NewsList from './NewsList'

const STATUS = {
	PENDING: 'PENDING',
	FULFILLED: 'FULFILLED',
	REJECTED: 'REJECTED',
	IDLE: 'IDLE',
}

class ContentInfo extends Component {
	state = { news: null, error: '', status: STATUS.IDLE }

	async componentDidUpdate(prevProps) {
		if (prevProps.searchText !== this.props.searchText) {
			try {
				this.setState({ status: STATUS.PENDING })
				const { articles, status, message } = await getSearchNews(
					this.props.searchText
				)
				if (status === 'ok') {
					return this.setState({
						news: articles,
						status: STATUS.FULFILLED,
					})
				}
				throw new Error(message)
			} catch (error) {
				this.setState({ error: error.message, status: STATUS.REJECTED })
			}
		}
	}
	render() {
		const { error, news, status } = this.state
		const { PENDING, FULFILLED, REJECTED } = STATUS

		if (status === PENDING) return <Loader />
		else if (status === FULFILLED)
			return news.length > 0 ? <NewsList news={news} /> : <NoResultCard />
		else if (status === REJECTED) return <ErrorCard error={error} />
	}
	// render() {
	// 	const { error, news, status } = this.state

	// 	if (status === 'pending') {
	// 		return (
	// 			<Loader/>
	// 		)
	// 	} else if (status === 'fulfilled') {
	// 		return news.length > 0 ? (
	// 			<NewsList news={news}/>
	// 		) : (
	// 			<NoResultCard/>
	// 		)
	// 	} else if (status === 'rejected') {
	// 		return (
	// 			<ErrorCard error={error}/>
	// 		)
	// 	}
	// }
}

export default ContentInfo
// class ContentInfo extends Component {
// 	state = { news: null, error: '', isLoading: false }
// 	async componentDidUpdate(prevProps) {
// 		if (prevProps.searchText !== this.props.searchText) {
// 			try {
// 				this.setState({ isLoading: true })
// 				const { articles, status, message } = await getSearchNews(
// 					this.props.searchText
// 				)
// 				if (status === 'ok') {
// 					return this.setState({ news: articles })
// 				}
// 				throw new Error(message)
// 			} catch (error) {
// 				this.setState({ error: error.message })
// 			} finally {
// 				this.setState({ isLoading: false })
// 			}
// 		}
// 	}
// 	// componentDidUpdate(prevProps) {
// 	// 	if (prevProps.searchText !== this.props.searchText) {
// 	// 		getSearchNews(this.props.searchText).then((data) =>
// 	// 			this.setState({ news: data.articles })
// 	// 		)
// 	// 	}
// 	// }
// 	render() {
// 		const { error, news, isLoading } = this.state
// 		return (
// 			<>
// 				{isLoading && (
// 					<div className='spinner-border text-success' role='status'>
// 						<span className='visually-hidden'>Loading...</span>
// 					</div>
// 				)}
// 				{error && (
// 					<div className='alert alert-danger mt-3' role='alert'>
// 						{error}
// 					</div>
// 				)}
// 				{news?.length === 0 && (
// 					<div className='alert alert-warning mt-3' role='alert'>
// 						No results!
// 					</div>
// 				)}
// 				{news?.length > 0 && (
// 					<ul className='list-group mt-3'>
// 						{news.map((el) => (
// 							<li key={el.url} className='list-group-item'>
// 								{el.title}
// 							</li>
// 						))}
// 					</ul>
// 				)}
// 			</>
// 		)
// 	}
// }

// export default ContentInfo
