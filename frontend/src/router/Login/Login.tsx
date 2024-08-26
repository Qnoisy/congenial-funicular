import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { CustomButton } from '../../components/UI/CustomButton';
import { CustomInput } from '../../components/UI/CustomInput';
import { useAppDispatch } from '../../hooks/redux';
import { loginUser } from '../../store/reducers/ActionCreators';
import { userSlice } from '../../store/reducers/UserSlice';
import { initialValuesLogin, loginSchema } from '../../validation/userShema';
import styles from './Login.module.scss';

export const Login = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		const userToken = localStorage.getItem('userToken');
		if (userToken) {
			dispatch(userSlice.actions.userIsAuthSuccess(true));
		}
	}, [dispatch]);
	return (
		<Formik
			initialValues={initialValuesLogin}
			validationSchema={loginSchema}
			onSubmit={(values, actions) => {
				console.log(values);
				dispatch(loginUser(values.password, values.username));
				actions.resetForm();
			}}
		>
			<Form className={styles.contactForm}>
				<CustomInput
					label='Login'
					name='username'
					placeholder='Enter your login'
				/>
				<CustomInput
					label='Password'
					name='password'
					placeholder='Enter your password'
					type='password'
				/>
				<CustomButton type='submit' text='Submit'></CustomButton>
			</Form>
		</Formik>
	);
};
