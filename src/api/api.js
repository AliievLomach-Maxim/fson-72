const BASE_URL = 'https://newsapi.org/v2/everything'
const API_KEY = '7391ec9459644ca0a76cb25df2a23597'

// export const getSearchNews = (text) => {
// 	return fetch(`${BASE_URL}?q=${text}`, {
// 		headers: {
// 			'X-Api-Key': API_KEY,
// 		},
// 	}).then((res) => res.json())
// }
export const getSearchNews = async (text) => {
	try {
		const data = await fetch(`${BASE_URL}?q=${text}`, {
			headers: {
				'X-Api-Key': API_KEY,
			},
		})
		return await data.json()
	} catch (error) {
		console.log(error)
	}
}
