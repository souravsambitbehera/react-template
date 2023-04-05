import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Header from './components/header/header'
import About from './components/about/about'
const AppLayout = () => {
  return (
    <>
    {/* <Home/> */}
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}


const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children : [
      {
        path : "/",
        element:<Home />
      },
      {
        path : "/about",
        element:<About />
      }
    ]
  }
])

export default AppLayout;
export {AppRouter}