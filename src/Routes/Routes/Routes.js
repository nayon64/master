import Contact from "../../Pages/Contact/Contact/Contact";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element:<Home/>
			},
			{
				path: "/home",
				element:<Home/>
			},
			{
				path: "/contact",
				element:<Contact/>
			}
		]
	}
])
export default router;