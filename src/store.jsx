import { configureStore, createSlice } from '@reduxjs/toolkit';

const stock = createSlice({
	name: 'stock',
	initialState: [],
	reducers: {
		addCount(state, action) {
			const item = state.find((item) => item.id === action.payload);
			item.count++;
		},

		addCart(state, action) {
			const existingItem = state.find((item) => item.id === action.payload.id);
			if (existingItem) {
				alert('이미 상품이 장바구니에 존재합니다.');
			} else {
				state.push({
					id: action.payload.id,
					name: action.payload.name,
					count: 1,
				});
				alert('상품이 추가되었습니다.');
			}
		},
	},
});

const store = configureStore({
	reducer: {
		stock: stock.reducer,
	},
});

export const { addCount, addCart } = stock.actions;
export default store;
