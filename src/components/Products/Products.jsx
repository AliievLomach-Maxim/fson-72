import React, { useEffect, useMemo, useState } from 'react'
import Loader from '../ContentInfo/Loader'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../store/products/thunks'
import {
	selectProducts,
	selectSortedProducts,
} from '../../store/products/selectors'
import {
	useGetProductsQuery,
	useDeleteProductMutation,
	useCreatePostMutation,
} from '../../store/productsApi'

const Products = () => {
	const { data: products, isLoading, error, refetch } = useGetProductsQuery()

	const [deleteProduct, { isLoading: isLoadingDelete, error: errorDelete }] =
		useDeleteProductMutation()

	const [create, data] = useCreatePostMutation()
	// const { isLoading, error } = useSelector(selectProducts)
	// const sortedProducts = useSelector(selectSortedProducts)

	// const [count, setCount] = useState(0)

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getProductsThunk())
	// }, [dispatch])
	const handleClick = (id) => {
		deleteProduct(id)
		// refetch()
	}
	return (
		<>
			{isLoadingDelete && <h2>Deleting...</h2>}
			{error && <h2>{error}</h2>}
			{isLoading && <Loader />}
			<button onClick={() => create({ title: 'asd' })}>create</button>
			<ul>
				{products &&
					products.map(({ id, title, price }) => (
						<li key={id}>
							<Link to={id.toString()}>
								{title} {price}$
							</Link>
							<button onClick={() => handleClick(id)}>
								delete
							</button>
						</li>
					))}
			</ul>
		</>
	)
}

export default Products
