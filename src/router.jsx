import Layout from "./pages/Layout";
import Markdown from "./pages/Markdown";
import Pdf from "./pages/Pdf";

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                path: '/md',
                element: <Markdown />,
            },
            {
                path: '/pdf',
                element: <Pdf />,
            }
        ]
    }
]
