import { Link } from "react-router-dom";

const subPages = [
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "NEWS",
    path: "/news",
  },
];
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-12">
        {subPages.map((page) => {
          return (
            <Link
              to={page.path}
              key={page.name}
              className="text-base font-bold text-black"
            >
              {page.name}
            </Link>
          )
        })}
      </div>
    </nav>
  );
}
