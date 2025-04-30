import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import Navbar from "./Navbar";
import CategoryButton from "@/styles/ui/CategoryButton";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white flex justify-between items-center px-8 py-4">
      <Link to="/">
        <img src={Logo} alt="로고 이미지" className="motion-reduce:animate-spin w-10 h-10" />
      </Link>
      <Navbar/>
      <CategoryButton variant="primary" onClick={() => navigate("/News")} >
        MEDICAL NEWSROOM
      </CategoryButton>
    </header>
  );
}
