import { Formik, Form as FormikForm } from 'formik';
import { subscribeSchema } from '../../../../validation/userShema';
import { CustomButton } from '../../../UI/CustomButton';
import { CustomInput } from '../../../UI/CustomInput';

// interface FooterFormProps {}
export const FooterForm = () => {
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			onSubmit={(values, actions) => {
				console.log(values);
				actions.resetForm();
			}}
			validationSchema={subscribeSchema}
		>
			{() => (
				<FormikForm>
					<CustomInput
						name='email'
						placeholder='example@email.com'
						type='email'
						label='Subscribe to our newsletter'
					/>
					<CustomButton type='submit' text={'Subscribe'}></CustomButton>
				</FormikForm>
			)}
		</Formik>
	);
};
