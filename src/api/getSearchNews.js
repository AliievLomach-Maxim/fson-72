const BASE_URL = 'https://newsapi.org/v2/everything'
const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'

export const getSearchNews = (text) => {
	return fetch(`${BASE_URL}?q=${text}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	}).then((res) => res.json())
}
