import Test from '../pages/Test';
import Test2 from '../pages/Test2';
import { Login } from './Login';

export const privateRoutes = [
	{ path: '/test', component: <Test /> },
	{ path: '/test2', component: <Test2 /> },
];

export const publicRoutes = [
	{ path: '/test', component: <Test /> },
	{ path: '/login', component: <Login /> },
];

export interface MenuItem {
	title: string;
	link: string;
}

export const menuItems: MenuItem[] = [
	{ title: 'Home', link: '/' },
	{ title: 'Test', link: '/test' },
	{ title: 'Test2', link: '/test2' },
];
