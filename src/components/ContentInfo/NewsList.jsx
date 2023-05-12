import React from 'react'
import NewsElement from './NewsElement'

const NewsList = ({ news }) => {
	return (
		<ul className='list-group mt-3'>
			{news.map((el) => (
				<NewsElement el={el} key={el.url} />
			))}
		</ul>
	)
}

export default NewsList
