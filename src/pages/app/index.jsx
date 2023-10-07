
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home";
import Account from "../account";
import SignIn  from "../signin";
import Order from "../order";
import Orders from "../orders";
import NotFound from "../not-found";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/acount', element: <Account/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/order', element: <Order/>},
    { path: '/orders', element: <Orders/>},
    { path: '/not-found', element: <NotFound/>},
  ])

  return routes;
}

const App = () => {

  return (
      <div className='tracking-wide font-roboto min-h-screen grid content-start dark bg-gray-900 pt-6 text-3xl font-semibold text-center text-gray-200 dark:text-gray-200'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
  )
}

export default App
