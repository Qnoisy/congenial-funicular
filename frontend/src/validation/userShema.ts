import * as Yup from 'yup';

const regx = {
	// Оновлений регулярний вираз: тепер дозволяє лише букви та пробіли
	name: /^[а-яА-Яa-zA-Z ]{2,30}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

// Схема для реєстрації
const firstName = Yup.string()
	.matches(regx.name, 'Tylko litery, od 2 do 30 znaków')
	.required('Proszę wpisać swoje imię');

const lastName = Yup.string()
	.matches(regx.name, 'Tylko litery, od 2 do 30 znaków')
	.required('Proszę wpisać swoje nazwisko');

const email = Yup.string()
	.matches(regx.email, 'Format example@gmail.com')
	.required('Proszę wpisać swój adres email');

export const registrationSchema = Yup.object().shape({
	firstName,
	lastName,
	email,
});

export const initialValuesRegistration = {
	firstName: '',
	lastName: '',
	email: '',
};

// Схема для входу в систему
const username = Yup.string().required('Proszę wpisać swoją nazwę użytkownika');

const password = Yup.string().required('Proszę wpisać swoje hasło');

export const loginSchema = Yup.object().shape({
	username,
	password,
});

export const initialValuesLogin = {
	username: '',
	password: '',
};
