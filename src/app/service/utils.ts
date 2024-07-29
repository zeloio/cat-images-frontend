const env = import.meta.env

export const headers = {
	'Accept': 'application/json',
	'x-api-key': env.MW_API_KEY,
	'Accept-Language': 'it'
}

export const requestConfiguration = {
	responseType: 'json',
	headers: headers,
	timeout: 8000,
	responseEncoding: 'utf8'
}