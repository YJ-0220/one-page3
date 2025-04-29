import Logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-300 flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="로고 이미지" className="w-10 h-10" />
        <div>
          <p>주소</p>
          <p>전화번호</p>
          <p>이메일</p>
        </div>
      </div>
    </footer>
  );
}
