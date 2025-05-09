import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import About from "@/pages/subpages/About";
import News from "@/pages/subpages/News";
import NotFound from "@/pages/NotFound";
import Admin from "@/pages/Admin";

const subpages = [
  {
    path: "about",
    element: <About />,
  },
  {
    path: "news",
    element: <News />,
  },
];

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...subpages.map((subpage) => ({
        path: subpage.path,
        element: subpage.element,
      })),
      // 국가별 페이지 추가
      {
        path: ":country(us|jp)",
        element: <Home />,
        children: [
          ...subpages.map((subpage) => ({
            path: subpage.path,
            element: subpage.element,
          })),
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
