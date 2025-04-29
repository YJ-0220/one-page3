import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import Navbar from "./Navbar";
import Button from "../ui/Button";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-blue-300 flex justify-between items-center px-8 py-4">
      <Link to="/">
        <img src={Logo} alt="로고 이미지" className="w-10 h-10" />
      </Link>
      <Navbar />
      <Button variant="primary" onClick={() => navigate("/login")}>
        로그인
      </Button>
    </header>
  );
}
