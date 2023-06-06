import axios from 'axios'
// axios.defaults.url = 'https://api.escuelajs.co/api/v1/products'

export const getProducts = async () => {
	const { data } = await axios('https://api.escuelajs.co/api/v1/products')
	return data
}

export const getProductsDetails = async (id) => {
	const { data } = await axios(
		`https://api.escuelajs.co/api/v1/products/${id}`
	)
	return data
}
