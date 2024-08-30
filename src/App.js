import React, { Suspense, lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
//import About from './components/sub-pages/About'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Error from './components/sub-pages/Error'
import { ContactUs } from './components/sub-pages/ContactUs'
import RestaurantMenu from './components/sub-pages/RestaurantMenu'
import Cart from './components/sub-pages/cart'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
//import Groceries from './components/Groceries'

//Chunking || Code Splitting || Dynamic Bundling || Lazy Loading || on demand  loading
const Groceries = lazy(() => import('./components/Groceries'))  //lazy loading of grocery page component
const About = lazy(() => import('./components/sub-pages/About'))

const App = () => {

    const [ userName, setUserName ] = useState();

    //authentiation
    useEffect(() => {
        //make a api all and send user name and password
        const data = {
            name: userName,
        };
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div id='container'>

                <Header />
                <Outlet />
            
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    { 
        path: '/',
        element: <App />,
        children: [
            
            { 
                path: "/",
                element: <Body />
            },
            { 
                path: "/about",
                element: <Suspense fallback={<h2>Loading...</h2>}><About/></Suspense>
            },
            {
                path:"/ContactUs",
                element:<ContactUs/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurantMenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/groceries",
                element:<Suspense fallback={<h2>Loading...</h2>}><Groceries/></Suspense>
            }
        ],
        errorElement: <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
    
root.render(<RouterProvider router={appRouter} />);
