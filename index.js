import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import ShimmerUI from "./src/components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./src/utilities/appStore";
import Category from "./src/components/Category";
import CategoryItem from "./src/components/CategoryItem";
import Footer from "./src/components/Footer";
import Footer from "./src/components/Footer";
import Login from "./src/components/Login";

// import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";

/*
--> Header
    - Logo 
    - Nav Items
--> Body
    - Search
    - RestaurantContainer
      - RestaurantCard
        - Name of Res , star Rating , cuisine , delay time
--> Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

// Chunking
// Dynamic Bundling
// lazy loading
// Code Splitting
// on Demand Loading
// Lazy Loading used to breack down the larze file in small by breacking components 
// When there are files more than 50 it will be good to breack components 
// -> To use this we use lazy which takes a call back fn in which we have to pass the path
// -> Now it will through an error because of react is fast and it cannot get that file in 0ms
// --> Then to avoid this suspense and we can give a compoonent in callback which will be shown until that gets fetches

const Cart = lazy(() => import("./src/components/Cart"));

const Multi = () =>
{
    return (
        <div>
            <div className="w-9/12 m-auto">
                <Category/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}

const AppLayout = () =>
{
    return (
        <Provider store={ appStore }>
            <Header/>
            <Outlet/>
        </Provider>
    );
};

const appRouter = createBrowserRouter
(
    [
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Multi/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu/>,
                },
                {
                    path: "/cart",
                    element: <Suspense callback={<ShimmerUI/>}><Cart/></Suspense>,
                },
                {
                    path: "/category",
                    element: <CategoryItem/>
                },
                {
                    path: "/login",
                    element: <Login/>
                }
            ],
            errorElement: <Error/>
        },
        
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);