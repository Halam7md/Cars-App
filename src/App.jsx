
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import APICars from './Components/APICars/APICars';
import RentDeals from './Components/RentDeals/RentDeals'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import HowItWork from './Components/HowItWork/HowItWork';
import ForRent from './Components/ForRent/ForRent'
import CarDetails from './Components/CarDetails/CarDetails';
import AllCars from './Components/AllCars/AllCars';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { index: "true", element: <Home/>},
        { path: "home", element: <Home/>},
        { path: "apicars", element: <APICars/>,
          children:[
            {path:"allcars",element:<AllCars/>},
            {path:"cardetails",element:<CarDetails/>}
          ]},
        { path: "rentdeals", element: <RentDeals/>},
        { path: "whychooseus", element: <WhyChooseUs/>},
        { path: "howitwork", element: <HowItWork/>},
        { path: "forrent", element: <ForRent/>},
      ],
      errorElement:<NotFound/>
    }
  ])
 

  return (
    <>
       <RouterProvider router={routes}></RouterProvider>
    </>
  )
}


export default App
