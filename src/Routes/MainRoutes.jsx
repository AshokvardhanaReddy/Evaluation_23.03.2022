
import {Routes, Route} from "react-router-dom";
import {Home} from "../components/Home";
import {About} from "../components/About";
import { Products } from "../components/ProductsDashboard";
import {SingleProductList} from "../components/SingleProduct";

export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:id" element={<SingleProductList/>} ></Route>
        </Routes>
        </>
    )
}