import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const initialState: IUser = {
	isAuth: false,
	isLoading: false,
	error: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userIsAuth(state) {
			state.isLoading = true;
		},
		userIsAuthSuccess(state, action: PayloadAction<boolean>) {
			state.isLoading = false;
			state.error = '';
			state.isAuth = action.payload;
		},
		userIsAuthError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuth = false;
		},
		userLogout(state) {
			state.isAuth = false;
		},
		// userRegister: place for future registration implementation
		// userRegisterSuccess: place for future registration implementation
		// userRegisterError: place for future registration implementation
	},
});

export default userSlice.reducer;
