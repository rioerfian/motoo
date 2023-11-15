import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import ProductDetail from "./pages/Landing/ProductDetail";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chart from "./pages/Dashboard/Chart";
import ProductShow from "./pages/Dashboard/ProductShow";
import ProductEdit from "./pages/Dashboard/ProductEdit";
import Report from "./pages/Dashboard/Report";
import ProductCreate from "./pages/Dashboard/ProductCreate";
import UserManagement from "./pages/Dashboard/UserManagement";
import UserEdit from "./pages/Dashboard/UserEdit";


const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/register',
				element: <Register />,
			},
      {
				path: '/',
				element: <Login />,
			},
			{
				path: '/welcome',
				element: <LandingPage />,
			},
			{
				path: '/product/:id',
				element: <ProductDetail />,
			},
      
		],
	},
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/report',
				element: <Report />,
			},
			{
				path: '/chart',
				element: <Chart />,
			},
			{
				path: '/users',
				element: <UserManagement />,
			},
			 {
				path: '/products/create',
				element: <ProductCreate />,
			},
      {
				path: '/products/:id',
				element: <ProductShow />,
			},
			{
				path: '/products/:id/edit',
				element: <ProductEdit />,
			},
			{
				path: 'users/:id',
				element: <UserEdit />

			}
		],
	}
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/product" element={<ProductDetail />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />}/>
//       {/* <Route path="/register" element={< />} /> */}
//     </>
//   )
// );


export default router;
