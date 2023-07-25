import Basket from "../pages/Basket/Basket";
import ControlData from "../pages/ControlData/ControlData";
import Error from "../pages/Error/Error";
import FAQPage from "../pages/FAQ/FAQPage";
import FormComponent from "../pages/FormComponent/FormComponent";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";


export const navLinks = [
    {path:'/', element: Home, title: "Главная"},
    {path:'/products', element: Products, title: "Каталог"},
    {path:'/basket', element: Basket, title: "Корзина"},
    {path:'/FAQ', element: FAQPage, title: "FAQ's"},
]

export const routes = [
    {path:'/', element: Home,},
    {path:'/products', element: Products,},
    {path:'/products/:id', element: Product,},
    {path:'/basket', element: Basket,},
    {path:'/FAQ', element: FAQPage,},
    {path:'/order', element: FormComponent,},
    {path:'/data', element: ControlData,},
    {path:'*', element: Error,},
]