import { Link } from "react-router-dom";

const subPages = [
  {
    name: "서브페이지1",
    path: "/subpage1",
  },
  {
    name: "서브페이지2",
    path: "/subpage2",
  },
  {
    name: "서브페이지3",
    path: "/subpage3",
  },
  {
    name: "서브페이지4",
    path: "/subpage4",
  },
  {
    name: "서브페이지5",
    path: "/subpage5",
  },
];
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <div className="flex gap-4">
        {subPages.map((page) => {
          return (
            <Link to={page.path} key={page.name} className="text-base font-bold text-gray-500">
              {page.name}
            </Link>
          )
        })}
      </div>
    </nav>
  );
}
