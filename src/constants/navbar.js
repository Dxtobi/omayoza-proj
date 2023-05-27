import Login from "../components/auth/Login";
import About from "../pages/About";
import Learn from "../pages/Learn";
import Markets from "../pages/Markets";
import Quest from "../pages/Quest";
import Signup from "../pages/auth_pages/Signup";

export const navbar = [

    {
        path: "/markets",
        element: <Markets />,
    },
    {
        path: "/learn-with-omazoya",
        element: <Learn />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/quests",
        element: <Quest />,
    },
]