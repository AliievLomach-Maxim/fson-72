import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts, getProductsDetails } from '../../api/products'

export const getProductsThunk = createAsyncThunk(
	'products/getAllProducts',
	() => {
		return getProducts()
	}
)

export const getProductDetailsThunk = createAsyncThunk(
	'products/getProductDetails',
	(id, { rejectWithValue }) => {
		try {
			return getProductsDetails(id)
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
