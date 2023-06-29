import Basket from "../pages/Basket/Basket";
import FAQPage from "../pages/FAQ/FAQPage";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";


export const navLinks = [
    {path:'/', element: Home, title: "Главная"},
    {path:'/products', element: Products, title: "Каталог"},
    {path:'/basket', element: Basket, title: "Корзина"},
    {path:'/FAQ', element: FAQPage, title: "FAQ's"},
]