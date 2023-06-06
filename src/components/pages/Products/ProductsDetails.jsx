import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsDetails } from '../../../api/products'
import styled from 'styled-components'

const Comp = styled('a')(() => ({
	'&.active': {
		color: 'red',
	},
}))

const ProductsDetails = () => {
	const [product, setProduct] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			const data = await getProductsDetails(id)
			setProduct(data)
		}
		getData()
	}, [id])

	return (
		product && (
			<>
				<h1>Name: {product.title}</h1>
				<h1>$$ {product.price}</h1>
			</>
		)
	)
}

export default ProductsDetails
