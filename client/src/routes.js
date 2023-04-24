import Admin from './Pages/Admin';
import {ADMIN_ROUTE, BASKET_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LIBRARY_ROUTE} from "./utils/consts";
import Basket from "./Pages/Basket";
import Auth from "./Pages/Auth";
import Contacts from "./Pages/Contacts";
import BookOne from "./Pages/BookOne";
import Library from "./Pages/Library";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Comment: Admin
    },
    {
        path: BASKET_ROUTE,
        Comment: Basket
    }
]

export const publicRoutes = [
    {
        path: LIBRARY_ROUTE,
        Comment: Library
    },
    {
        path: LOGIN_ROUTE,
        Comment: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Comment: Auth
    },
    {
        path: BOOK_ROUTE,
        Comment: BookOne
    }

]