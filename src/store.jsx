import { configureStore, createSlice } from '@reduxjs/toolkit';

const stock = createSlice({
	name: 'stock',
	initialState: [
		{ id: 0, name: 'White and Black', count: 2 },
		{ id: 2, name: 'Grey Yordan', count: 1 },
	],
	reducers: {
		addCount(state, action) {
			const item = state.find((item) => item.id === action.payload);
			item.count++;
		},
	},
});

const store = configureStore({
	reducer: {
		stock: stock.reducer,
	},
});

export const { addCount } = stock.actions;
export default store;
