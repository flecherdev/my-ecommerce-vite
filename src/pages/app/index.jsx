
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../context";
import Home from "../home";
import Account from "../account";
import SignIn  from "../signin";
import Order from "../order";
import Orders from "../orders";
import NotFound from "../not-found";
import NavBar from "../../components/navbar";
import CheckoutSideMenu from "../../components/checkout-side-menu";
import "./app.css"

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/all', element: <Home/>},
    { path: '/clothes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/furnitures', element: <Home/>},
    { path: '/toys', element: <Home/>},
    { path: '/others', element: <Home/>},
    { path: '/acount', element: <Account/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/order', element: <Order/>},
    { path: '/orders', element: <Orders/>},
    { path: '/orders/last', element: <Order/>},
    { path: '/orders/:id', element: <Order/>},
    { path: '/not-found', element: <NotFound/>},
  ])

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <div className='tracking-wide font-roboto min-h-screen grid content-start dark bg-gray-900 pt-6 text-3xl font-semibold text-center text-gray-200 dark:text-gray-200'>
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
          <CheckoutSideMenu />
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
