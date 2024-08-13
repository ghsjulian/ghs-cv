/* Importing All Routes And Components Here...*/
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import NotFound from "./components/404";

const MyRoutes = [
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Home />
            },

            /*
            { path: "/view-services/:service_id", element: <ViewService /> },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "resume",
                element: <Home />
            },
            {
                path: "work",
                element: <Home />
            },
            */
            {
                path: "about",
                element: <AboutSection />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    {
                path: "*",
                element: <NotFound />
            }
    
];

export default MyRoutes;
