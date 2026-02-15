import { createBrowserRouter } from "react-router-dom"
import About from "./Components/About"
import Cart from "./Components/Cart"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Login from "./Components/Login"
import Products from "./Components/Products"
import Signup from "./Components/Signup"
import Layout from "./Layout/Layout"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Hero /> },
      {path:"products",element:<Products/>},
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {path:"login",element:<Login/>},
      {path:'signup',element:<Signup/>}
    ]
  }
])

export default router
