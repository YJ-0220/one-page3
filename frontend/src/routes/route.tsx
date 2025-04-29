import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Subpage1 from "@/pages/subpages/subpage1";
import Subpage2 from "@/pages/subpages/subpage2";
import Subpage3 from "@/pages/subpages/subpage3";
import Subpage4 from "@/pages/subpages/subpage4";
import Subpage5 from "@/pages/subpages/subpage5";

const subpages = [
  {
    path: "subpage1",
    element: <Subpage1 />,
  },
  {
    path: "subpage2",
    element: <Subpage2 />,
  },
  {
    path: "subpage3",
    element: <Subpage3 />,
  },
  {
    path: "subpage4",
    element: <Subpage4 />,
  },
  {
    path: "subpage5",
    element: <Subpage5 />,
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
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];
