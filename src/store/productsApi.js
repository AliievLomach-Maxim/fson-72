import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({
		// baseUrl: 'https://api.escuelajs.co/api/v1/',
		baseUrl: 'https://dummyjson.com/',
	}),
	tagTypes: ['Products', 'User'],
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({ url: 'products' }),
			transformResponse: (response) =>
				response.products.toSorted((a, b) => a.price - b.price),
			providesTags: ['Products', 'User'],
		}),
		// getUser: builder.query({
		// 	query: () => ({ url: 'products' }),
		// 	providesTags: ['User'],
		// }),
		deleteProduct: builder.mutation({
			query: (id) => ({ url: `products/${id}`, method: 'DELETE' }),
			invalidatesTags: ['Products'],
		}),
		createPost: builder.mutation({
			query: (data) => ({ url: `products`, method: 'POST', body: data }),
			invalidatesTags: ['User'],
		}),
	}),
})

export const {
	useGetProductsQuery,
	useDeleteProductMutation,
	useCreatePostMutation,
} = productsApi
