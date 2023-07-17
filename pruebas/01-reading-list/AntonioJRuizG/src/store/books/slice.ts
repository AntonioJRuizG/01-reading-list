import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BookProps } from '../../components/model/book';

const initialState: BookProps[] = [];

export type BookId = string;

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialState,
	reducers: {
		loadNewBooks: (_state, action: PayloadAction<BookProps[]>) => {
			return [...action.payload];
		},
		deleteBookByISBN: (state, action: PayloadAction<BookId>) => {
			const id = action.payload;
			return state.filter((book) => book.isbn !== id);
		},
	},
});

export default booksSlice.reducer;

export const { deleteBookByISBN, loadNewBooks } = booksSlice.actions;
