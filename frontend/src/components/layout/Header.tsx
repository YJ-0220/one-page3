import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="bg-blue-300 flex justify-between items-center px-8 py-4">
      <Link to="/">
        <img src={Logo} alt="로고 이미지" className="w-10 h-10" />
      </Link>
      <Navbar />
    </header>
  );
}
