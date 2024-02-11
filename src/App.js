import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/sub-pages/About'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Error from './components/sub-pages/Error'
import { ContactUs } from './components/sub-pages/ContactUs'
const App = () => {
    return (
        <div id='container'>

            <Header />
            <Outlet />
        
        </div>
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
                element: <About />
            },
            {
                path:"/ContactUs",
                element:<ContactUs/>
            }
        ],
        errorElement: <Error/>
    },
    { 
        path: '/about',
        element: <About /> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
    
root.render(<RouterProvider router={appRouter} />);
