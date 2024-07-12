import { ErrorMessage, Field } from 'formik';
import { forwardRef } from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps {
	label?: string;
	name: string;
	type?: string;
	placeholder: string;
}
export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	({ label, name, type = 'text', placeholder }, ref) => {
		return (
			<div className={styles.inputWrapper}>
				{label && (
					<label htmlFor={name} className={styles.label}>
						{label}
					</label>
				)}
				<Field
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={styles.customInput}
				/>
				<ErrorMessage
					name={name}
					className={styles.errorText}
					component='div'
				/>
			</div>
		);
	}
);
